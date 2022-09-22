import { Button, Col, Form, Input, Row } from "antd";
import MyUpload from "component/MyUpload/MyUpload";
import { useTranslation } from "react-i18next";

const CreateStore = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="grid grid-cols-2">
        <div className="text-[30px] text-darkblue font-bold">
          {`${t("stores&branches")}`}
        </div>
        <div className="flex justify-end items-start gap-2">
          <Button className="!h-[40px] !rounded-[4px] !text-[20px]">
            ยกเลิก
          </Button>
          <Button className="!h-[40px] !rounded-[4px] !text-[20px] !text-white !bg-green">
            บันทึก
          </Button>
          <Button className="!h-[40px] !rounded-[4px] !text-[20px] !text-white !bg-green">
            บันทึกและดำเนินการต่อ
          </Button>
        </div>
      </div>
      <div className="bg-white mt-[24px] px-[30px] py-[24px]">
        <div className="text-[#231F20] text-[28px]">
          เพิ่มข้อมูลร้านค้า&สาขา
        </div>
        <Form layout="vertical" className="!mb-[100px]">
          {/* upload image */}
          <div className="flex justify-center items-center">
            <Form.Item name="profile">
              <MyUpload />
            </Form.Item>
          </div>
          <Row gutter={[24, 0]}>
            <Col span={8}>
              <Form.Item label={t("ชื่อร้าน")}>
                <Input placeholder="ชื่อร้าน" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label={t("ชื่อ (ผู้จัดการ)")}>
                <Input placeholder="ชื่อ (ผู้จัดการ)" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label={t("นามสกุล (ผู้จัดการ)")}>
                <Input placeholder="นามสกุล (ผู้จัดการ)" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[24, 0]}>
            <Col span={8}>
              <Form.Item label={t("เบอร์โทร")}>
                <Input placeholder="เบอร์โทร" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label={t("บ้านเลขที่")}>
                <Input placeholder="บ้านเลขที่" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label={t("ตำบล")}>
                <Input placeholder="ตำบล" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[24, 0]}>
            <Col span={8}>
              <Form.Item label={t("อำเภอ")}>
                <Input placeholder="อำเภอ" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label={t("จังหวัด")}>
                <Input placeholder="จังหวัด" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label={t("รหัสไปรษณีย์")}>
                <Input placeholder="รหัสไปรษณีย์" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default CreateStore;
