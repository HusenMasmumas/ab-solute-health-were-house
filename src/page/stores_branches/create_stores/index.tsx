import { Col, Form, Input, Row } from "antd";
import CHeader from "component/headerPage/Header";
import CInput from "component/input/c-input";
import MyUpload from "component/MyUpload/MyUpload";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { useCreateBranch, useGetBranchBYID, useUpdateBranch } from "service/branch";
import { IBranch } from "service/branch/interface";

const initialForm = {
  firstName	:	'',
  lastName	:	'',
  name	    :	'',
  phone	    :	'',
  address	    :	'',
  district	:	'',
  province	:	'',
  subDistrict	:	'',
  zipcode	    :	'',
}
const CreateStore = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [form] = Form.useForm();
  const createBranch = useCreateBranch();
  const updateBranch = useUpdateBranch();
  const { data:dataBranch } = useGetBranchBYID(location.state?.id);

  useEffect(()=>{
    if(dataBranch){
      const { result } = dataBranch 
      console.log('dataBranch111',dataBranch.result);
      form.setFieldsValue({
        firstName	:	dataBranch.result?.firstName,
        lastName	:	result?.lastName,
        name	    :	result?.name,
        phone	    :	result?.phone,
        address	    :	result?.address,
        district	:	result?.district,
        province	:	result?.province,
        subDistrict	:	result?.subDistrict,
        zipcode	    :	result?.zipcode,
      })
    }else{
      form.setFieldsValue(initialForm)
    }
  },[dataBranch])

  const onFinish = (value:IBranch)=>{
    if(location.state?.id){
      let temp : IBranch & { id:string };
      temp = {...value, id: location.state.id}
      console.log('temp',temp);
      updateBranch.mutate(
        temp,
        {
          onSuccess: async () => {
            alert('success')
            form.setFieldsValue(initialForm)
          },
          onError: async (errorStr) => {
            alert(errorStr)
          },
        }
      )
    }else{
      createBranch.mutate(
        value,
        {
          onSuccess: async () => {
            alert('success')
            if(location.state?.id){
              form.setFieldsValue(initialForm)
            }
          },
          onError: async (errorStr) => {
            alert(errorStr)
          },
        }
      )
    }
  }
  
  return (
    <>
        <CHeader
          keyHeader="stores&branches"
          arrPath={["stores&branches", "addShop"]}
          buttons={[
            { colorButton: 'whilte',
              keytext: 'cancle',
              fn:  () => {
                navigate("/stores-branches");
              },
            },
            { colorButton: 'green',
              keytext: 'save',
              fn:  () => {
                form.submit()
                // navigate("/stores-branches");
              },
            }
          ]}
        />  
      <div className="bg-white mt-[24px] px-[30px] py-[24px]">
        <div className="text-[#231F20] !text-[20px] !font-semibold">
          เพิ่มร้านค้า&สาขา
        </div>
        <Form 
          layout="vertical" 
          form={form} 
          onFinish={onFinish}
          className="!mb-[100px]"
          >
          <div className="flex justify-center items-center !mb-[60px]">
            <Form.Item 
              // name="imageId" รอพี่นายแก้
              >
              <MyUpload />
            </Form.Item>
          </div>
          <Row gutter={[24, 0]}>
            <Col span={8}>
              <Form.Item 
                name='name' 
                label={t("ชื่อร้าน")}
                rules={[{ required: true, message: 'กรอกข้อมูล' }]}
                >
                <CInput placeholder="ชื่อร้าน" type="email"/>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item 
                name='firstName' 
                label={t("ชื่อ (ผู้จัดการ)")}
                // rules={[{ required: true, message: 'กรอกข้อมูล' }]}
                >
                <CInput placeholder="ชื่อ (ผู้จัดการ)" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item 
                name='lastName' 
                label={t("นามสกุล (ผู้จัดการ)")}
                // rules={[{ required: true, message: 'กรอกข้อมูล' }]}
                >
                <CInput placeholder="นามสกุล (ผู้จัดการ)" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[24, 0]}>
            <Col span={8}>
              <Form.Item 
              name='phone' 
              label={t("เบอร์โทร")}
              // rules={[{ required: true, message: 'กรอกข้อมูล' }]}
              >
                <CInput placeholder="เบอร์โทร" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item 
              name='address' 
              label={t("บ้านเลขที่")}
              // rules={[{ required: true, message: 'กรอกข้อมูล' }]}
              >
                <CInput placeholder="บ้านเลขที่" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item 
              name='subDistrict' 
              label={t("ตำบล")}
              // rules={[{ required: true, message: 'กรอกข้อมูล' }]}
              >
                <CInput placeholder="ตำบล" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[24, 0]}>
            <Col span={8}>
              <Form.Item 
              name="district" 
              label={t("อำเภอ")}
              // rules={[{ required: true, message: 'กรอกข้อมูล' }]}
              >
                <CInput placeholder="อำเภอ" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item 
              name='province' 
              label={t("จังหวัด")}
              // rules={[{ required: true, message: 'กรอกข้อมูล' }]}
              >
                <CInput placeholder="จังหวัด" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item 
              name='zipcode' 
              label={t("รหัสไปรษณีย์")}
              // rules={[{ required: true, message: 'กรอกข้อมูล' }]}
              >
                <CInput placeholder="รหัสไปรษณีย์" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
};

export default CreateStore;
