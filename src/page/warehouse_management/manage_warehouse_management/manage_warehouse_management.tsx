import { Button, Card, Col, Form, Input, Row, Select } from "antd";
import CreateForm from "component/Form/createForm";
import { IsearchFormItem } from "component/Form/searchForm";
import { useTranslation } from "react-i18next";

const ManageWarehouseManagement = () => {
  const { t } = useTranslation();
  const [form] = Form.useForm();

  return (
    <div>
      <div className="grid grid-cols-4">
        <div className="col-span-3">
          <h1 className="text-darkblue font-[600] text-[30px] !mb-0">{`${t(
            "warehouseManagement"
          )}`}</h1>
          <p className="!mb-0 text-darkblue">{`${t("จัดการคลังสินค้า")}`}</p>
        </div>
        <div className="grid grid-cols-2 gap-4 justify-end items-center">
          <Button className="!h-[40px] !rounded-[4px] !text-[20px]">
            ยกเลิก
          </Button>
          <Button className="!h-[40px] !rounded-[4px] !text-[20px] !text-white !bg-green">
            บันทึก
          </Button>
        </div>
      </div>
      <div className="bg-white pt-[16px] px-[24px] mt-[24px] pb-[100px]">
        <div className="text-lightblue text-[22px]">
          <span>ข้อมูลตู้เก็บสินค้า</span>
        </div>
        <div className="border-b-[0.1px] my-[16px] border-lightblue"></div>
        {/* form */}
        <Form>
          <Row gutter={[24, 0]}>
            <Col span={12}>
              <Form.Item>
                <label className="!text-darkgray !text-[18px]">SKU</label>
                <Input></Input>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item>
                <label className="!text-darkgray !text-[18px]">
                  รหัสตู้สินค้า
                </label>
                <Input></Input>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[24, 0]}>
            <Col span={12}>
              <Form.Item>
                <label className="!text-darkgray !text-[18px]">
                  เลือกสีตู้
                </label>
                <Select></Select>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};
export default ManageWarehouseManagement;
