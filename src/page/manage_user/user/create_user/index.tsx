import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Row, Select, Switch, Upload } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";

const CreateUser = () => {
  const { t } = useTranslation();
  const Option = Select;

  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };
  // const uploadButton = (
  //   <div>
  //     <PlusOutlined></PlusOutlined>
  //   </div>
  // );
  return (
    <div>
      <div className="grid grid-cols-2">
        <div className="text-[30px] text-darkblue font-bold">
          {`${t("manageUser")}`}
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
        <Form layout="vertical">
          <Form.Item>
            {/* upload image */}
            <div className="flex justify-center">
              <div className="rounded-full w-[120px] h-[120px] bg-slate-600 flex justify-end items-end"></div>
            </div>
          </Form.Item>
          <Row gutter={[24, 0]}>
            <Col span={8}>
              <Form.Item label={t("ชื่อ")}>
                <Input placeholder="ชื่อ"></Input>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label={t("นามสกุล")}>
                <Input placeholder="นามสกุล"></Input>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label={t("เบอร์โทร")}>
                <Input placeholder="เบอร์โทร"></Input>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[24, 0]}>
            <Col span={8}>
              <Form.Item label={t("อีเมล")}>
                <Input placeholder="อีเมล"></Input>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label={t("บ้านเลขที่")}>
                <Input placeholder="บ้านเลขที่"></Input>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label={t("ตำบล")}>
                <Input placeholder="ตำบล"></Input>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[24, 0]}>
            <Col span={8}>
              <Form.Item label={t("อำเภอ")}>
                <Input placeholder="อำเภอ"></Input>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label={t("จังหวัด")}>
                <Input placeholder="จังหวัด"></Input>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label={t("รหัสไปรษณีย์")}>
                <Input placeholder="รหัสไปรษณีย์"></Input>
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
                <Input placeholder="ชื่อผู้ใช้"></Input>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label={t("รหัสผ่าน")}>
                <Input.Password placeholder="รหัสผ่าน"></Input.Password>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default CreateUser;
