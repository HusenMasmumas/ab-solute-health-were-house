import { useEffect } from 'react'
import { Button, Col, Form, Input, Row, Select } from "antd";
import CHeader from "component/headerPage/Header";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
const CreateInventory = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const { Option } = Select;

  useEffect(()=>{
    // console.log('useLocation====',location.state);
  },[])
  return (
    <div>
      <div className="grid grid-cols-4">
        <div className="col-span-3">
          <CHeader
            keyHeader="warehouseManagement"
            arrPath={["warehouseManagement", location.state?.id ? "Locker "+location.state?.id :"addLocker"]}
          />
        </div>
        <div className="grid grid-cols-2 gap-4 justify-end items-center">
          <Button className="!h-[45px] !rounded-[4px] !text-[16px]" onClick={()=>{navigate("/warehouse-management/inventory-management")}}>
            {`${t("ยกเลิก")}`}
          </Button>
          <Button className="!h-[45px] !rounded-[4px] !text-[16px] !text-white !bg-green">
            {`${t("บันทึก")}`}
          </Button>
        </div>
      </div>
      <div className="bg-white pt-[16px] px-[24px] mt-[24px] pb-[100px]">
        <div className="text-lightblue text-[20px] font-semibold">
          <span>ข้อมูลตู้เก็บสินค้า</span>
        </div>
        <div className="border-b-[0.1px] my-[16px] border-lightblue"></div>
        {/* form */}
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
    </div>
  );
};
export default CreateInventory;
