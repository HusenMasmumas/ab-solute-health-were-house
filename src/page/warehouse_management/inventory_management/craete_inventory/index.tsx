import { useEffect } from 'react'
import { Col, Form, Input, Row, Select } from "antd";
import CHeader from "component/headerPage/Header";
import { useNavigate, useLocation } from "react-router-dom";
const CreateInventory = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { Option } = Select;

  useEffect(()=>{
    // console.log('useLocation====',location.state);
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
                  navigate("/warehouse-management/inventory-management");
                }
              }
            ]}
          />

      <div className="bg-white pt-[16px] px-[24px] mt-[24px] pb-[100px]">
        <div className="text-lightblue text-[20px] font-semibold">
          <span>ข้อมูลตู้เก็บสินค้า</span>
        </div>
        <div className="border-b-[0.1px] my-[16px] border-lightblue"></div>
        <Form layout="vertical">
          <Row gutter={[24, 0]}>
            <Col span={12}>
              <Form.Item label="SKU">
                <Input className="input-form" placeholder="SKU"></Input>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="รหัสตู้สินค้า">
                <Input
                  className="input-form"
                  placeholder="รหัสตู้สินค้า"
                ></Input>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[24, 0]}>
            <Col span={12}>
              <Form.Item label="เลือกสีตู้">
                <Select placeholder="เลือกสีตู้">
                  <Option value="สีน้ำเงิน">สีน้ำเงิน</Option>
                  <Option value="สีเขียว">สีเขียว</Option>
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
