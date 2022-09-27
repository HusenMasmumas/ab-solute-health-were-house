import { Button, Col, Form, Input, Row, Select, Switch } from "antd";
import CHeader from "component/headerPage/Header";
import MyUpload from "component/MyUpload/MyUpload";
import { useTranslation } from "react-i18next";

const CreateUser = () => {
  const { t } = useTranslation();
  const Option = Select;

  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };
  return (
    <div>
      <div className="grid grid-cols-2">
        <CHeader
          keyHeader="manageUser"
          arrPath={["manageUser", "user", "addUser"]}
        />
        {/* <div className="text-[30px] text-darkblue font-bold">
          {`${t("manageUser")}`}
        </div> */}
        <div className="flex justify-end items-center gap-2">
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
        <Form layout="vertical">
          {/* upload image */}
          <div className="flex justify-center items-center">
            <Form.Item name="profile">
              <MyUpload />
            </Form.Item>
          </div>
          <Row gutter={[24, 0]}>
            <Col span={8}>
              <Form.Item label={t("ชื่อ")}>
                <Input placeholder="ชื่อ" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label={t("นามสกุล")}>
                <Input placeholder="นามสกุล" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label={t("เบอร์โทร")}>
                <Input placeholder="เบอร์โทร" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[24, 0]}>
            <Col span={8}>
              <Form.Item label={t("อีเมล")}>
                <Input placeholder="อีเมล" />
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
          <Row gutter={[24, 0]}>
            <Col span={8}>
              <Form.Item label={t("บทบาท")}>
                <Select placeholder="บทบาท">
                  <Option>ผู้จัดการ</Option>
                  <Option>พนักงาน</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label={t("การใช้งาน")}>
                <Switch defaultChecked onChange={onChange} />
              </Form.Item>
            </Col>
          </Row>
        </Form>
        <div className="text-[#231F20] text-[28px] mt-[12px]">
          ตั้งค่ารหัสผ่าน
        </div>
        <Form layout="vertical">
          <Row gutter={[24, 0]}>
            <Col span={8}>
              <Form.Item label={t("ชื่อผู้ใช้")}>
                <Input placeholder="ชื่อผู้ใช้" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label={t("รหัสผ่าน")}>
                <Input.Password placeholder="รหัสผ่าน" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default CreateUser;
