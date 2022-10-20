import { Col, Form, Input, Row, Select, Switch } from "antd";
import ContentContainer from "component/container/ContentContainer";
import CHeader from "component/headerPage/Header";
import MyUpload from "component/MyUpload/MyUpload";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const { t } = useTranslation();
  const { Option } = Select;
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onFinish = (value:any)=>{
    console.log(value);
  }

  useEffect(()=>{

  },[])

  return (
    <>
      <CHeader
        keyHeader="manageUser"
        arrPath={["manageUser", "user", "addUser"]}
        buttons={[
          { colorButton: 'whilte',
            keytext: 'cancle',
            fn:  () => {
              navigate("/user/manage");
            },
          },
          { colorButton: 'green',
            keytext: 'save',
            fn:  () => {
              // navigate("/user/manage");
              form.submit();
            },
          }
        ]}
      />
      <ContentContainer>
      <div className="bg-white mt-[24px] px-[30px] py-[24px]">
        <div className="text-[#231F20] text-[20px] font-semibold">
          เพิ่มข้อมูลร้านค้า&สาขา
        </div>
        <Form 
          layout="vertical" 
          className="!mb-[100px]" 
          form={form}
          onFinish={onFinish}
        >
          <div className="flex justify-center items-center">
            <Form.Item name="img">
              <MyUpload />
            </Form.Item>
          </div>
          <Row gutter={[24, 0]}>
            <Col span={8}>
              <Form.Item label={t("ชื่อ")} name='firstName'>
                <Input className="input-form" placeholder="ชื่อ" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label={t("นามสกุล")} name='lastName'>
                <Input className="input-form" placeholder="นามสกุล" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label={t("เบอร์โทร")} name='phone'>
                <Input className="input-form" placeholder="เบอร์โทร" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[24, 0]}>
            <Col span={8}>
              <Form.Item label={t("อีเมล")} name='email'>
                <Input className="input-form" placeholder="อีเมล" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label={t("บ้านเลขที่")} name='address'>
                <Input className="input-form" placeholder="บ้านเลขที่" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label={t("ตำบล")} name='subDistrict'>
                <Input className="input-form" placeholder="ตำบล" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[24, 0]}>
            <Col span={8}>
              <Form.Item label={t("อำเภอ")} name='district'>
                <Input className="input-form" placeholder="อำเภอ" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label={t("จังหวัด")} name='province'>
                <Input className="input-form" placeholder="จังหวัด" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label={t("รหัสไปรษณีย์")} name='zipcode'>
                <Input className="input-form" placeholder="รหัสไปรษณีย์" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[24, 0]}>
            <Col span={8}>
              <Form.Item label={t("บทบาท")} name='roleId'>
                <Select placeholder="บทบาท">
                  <Option value='1'>ผู้จัดการ</Option>
                  <Option value='2'>พนักงาน</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label={t("การใช้งาน")} name='isActive' valuePropName="checked">
                <Switch />
              </Form.Item>
            </Col>
          </Row>
        </Form>
        <div className="text-[#231F20] text-[28px] mt-[12px]">
          ตั้งค่ารหัสผ่าน
        </div>
        <Form layout="vertical" form={form} onFinish={onFinish}>
          <Row gutter={[24, 0]}>
            <Col span={8}>
              <Form.Item label={t("ชื่อผู้ใช้")} name='username'>
                <Input className="input-form" placeholder="ชื่อผู้ใช้" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label={t("รหัสผ่าน")} name='password'>
                <Input.Password placeholder="รหัสผ่าน" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
      </ContentContainer>
    </>
  );
};

export default CreateUser;
