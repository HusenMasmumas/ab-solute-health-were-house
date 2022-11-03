import { useEffect } from 'react'
import { Col, Form, Input, Row, Select } from "antd";
import CHeader from "component/headerPage/Header";
import { useNavigate, useLocation } from "react-router-dom";
import { useCreateContainer } from 'service/container';
import { IContainer } from 'service/container/interface';
const CreateInventory = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { Option } = Select;
  const [form] = Form.useForm();
  const createContainer = useCreateContainer()
  const onFinish = (value:IContainer)=>{
    console.log('create container',value);
    createContainer.mutate(value,{
      onSuccess() {
        alert('success')
      },
      onError(error,) {
        alert(error)
      },
    })
  }
  useEffect(()=>{
    console.log('useLocation====',location.state);
  },[])
  return (
    <>
          <CHeader
            keyHeader="warehouseManagement"
            arrPath={["warehouseManagement", location.state?.id ? "Locker "+location.state?.id :"addLocker"]}
            buttons={[
              { 
                colorButton: 'whilte',
                keytext: 'cancle',
                fn:  () => {
                  navigate("/warehouse-management/inventory-management");
                }
              },
              { 
                colorButton: 'green',
                keytext: 'save',
                fn:  () => {
                  form.submit()
                  // navigate("/warehouse-management/inventory-management");
                }
              }
            ]}
          />

      <div className="bg-white pt-[16px] px-[24px] mt-[24px] pb-[100px]">
        <div className="text-lightblue text-[20px] font-semibold">
          <span>ข้อมูลตู้เก็บสินค้า</span>
        </div>
        <div className="border-b-[0.1px] my-[16px] border-lightblue"></div>
        <Form 
          layout="vertical" 
          form={form}
          onFinish={onFinish}
          requiredMark={false}
          >
          <Row gutter={[24, 0]}>
            <Col span={12}>
              <Form.Item 
                label="ชื่อตู้สินค้า" 
                name='name'
                rules={[{ required: true, message: 'กรอกข้อมูล' }]}
                >
                <Input className="input-form" placeholder="ชื่อตู้สินค้า"/>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item 
              label="รหัสตู้สินค้า" 
              name='code'
              rules={[{ required: true, message: 'กรอกข้อมูล' }]}
              >
                <Input
                  className="input-form"
                  placeholder="รหัสตู้สินค้า"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[24, 0]}>
            <Col span={12}>
              <Form.Item 
              label="เลือกสีตู้" 
              name='color'
              rules={[{ required: true, message: 'เลือกสีตู้' }]}
              >
                <Select placeholder="เลือกสีตู้">
                  <Option value="blue">สีน้ำเงิน</Option>
                  <Option value="green">สีเขียว</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
};
export default CreateInventory;
