import { Button, Col, Form, Input, Row, Select, Switch } from "antd";
import CHeader from "component/headerPage/Header";
import MyUpload from "component/MyUpload/MyUpload";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const { t } = useTranslation();
  const Option = Select;
  const navigate = useNavigate();
  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };
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
              navigate("/user/manage");
            },
          }
        ]}
      />
      <div className="bg-white mt-[24px] px-[30px] py-[24px]">
        <div className="text-[#231F20] text-[20px] font-semibold">
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
              <Form.Item label={t("ชื่อ")}>
                <Input className="input-form" placeholder="ชื่อ" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label={t("นามสกุล")}>
                <Input className="input-form" placeholder="นามสกุล" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label={t("เบอร์โทร")}>
                <Input className="input-form" placeholder="เบอร์โทร" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[24, 0]}>
            <Col span={8}>
              <Form.Item label={t("อีเมล")}>
                <Input className="input-form" placeholder="อีเมล" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label={t("บ้านเลขที่")}>
                <Input className="input-form" placeholder="บ้านเลขที่" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label={t("ตำบล")}>
                <Input className="input-form" placeholder="ตำบล" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[24, 0]}>
            <Col span={8}>
              <Form.Item label={t("อำเภอ")}>
                <Input className="input-form" placeholder="อำเภอ" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label={t("จังหวัด")}>
                <Input className="input-form" placeholder="จังหวัด" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label={t("รหัสไปรษณีย์")}>
                <Input className="input-form" placeholder="รหัสไปรษณีย์" />
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
                <Input className="input-form" placeholder="ชื่อผู้ใช้" />
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
    </>
  );
};

export default CreateUser;
