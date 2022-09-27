import { Button, Col, Form, Input, Row, Select } from "antd";
import CHeader from "component/headerPage/Header";
import { useTranslation } from "react-i18next";

const ManageWarehouseManagement = () => {
  const { t } = useTranslation();
  const Option = Select;

  return (
    <div>
      <div className="grid grid-cols-4">
        <div className="col-span-3">
          <CHeader
            keyHeader="warehouseManagement"
            arrPath={["warehouseManagement", "addLocker"]}
          />
        </div>
        <div className="grid grid-cols-2 gap-4 justify-end items-center">
          <Button className="!h-[40px] !rounded-[4px] !text-[20px]">
            {`${t("ยกเลิก")}`}
          </Button>
          <Button className="!h-[40px] !rounded-[4px] !text-[20px] !text-white !bg-green">
            {`${t("บันทึก")}`}
          </Button>
        </div>
      </div>
      <div className="bg-white pt-[16px] px-[24px] mt-[24px] pb-[100px]">
        <div className="text-lightblue text-[22px]">
          <span>ข้อมูลตู้เก็บสินค้า</span>
        </div>
        <div className="border-b-[0.1px] my-[16px] border-lightblue"></div>
        {/* form */}
        <Form layout="vertical">
          <Row gutter={[24, 0]}>
            <Col span={12}>
              <Form.Item label="SKU">
                <Input placeholder="SKU"></Input>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="รหัสตู้สินค้า">
                <Input placeholder="รหัสตู้สินค้า"></Input>
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
export default ManageWarehouseManagement;
