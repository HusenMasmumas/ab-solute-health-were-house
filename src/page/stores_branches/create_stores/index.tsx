import { Button, Col, Form, Input, Row } from "antd";
import CHeader from "component/headerPage/Header";
import MyUpload from "component/MyUpload/MyUpload";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const CreateStore = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <>
        <CHeader
          keyHeader="stores&branches"
          arrPath={["stores&branches", "addShop"]}
          buttons={[
            { colorButton: 'whilte',
              keytext: 'cancle',
              fn:  () => {
                navigate("/craete-stores-branches");
              },
            },
            { colorButton: 'green',
              keytext: 'save',
              fn:  () => {
                navigate("/craete-stores-branches");
              },
            }
          ]}
        />  
      <div className="bg-white mt-[24px] px-[30px] py-[24px]">
        <div className="text-[#231F20] !text-[20px] !font-semibold">
          เพิ่มร้านค้า&สาขา
        </div>
        <Form layout="vertical" className="!mb-[100px]">
          {/* upload image */}
          <div className="flex justify-center items-center !mb-[60px]">
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
    </>
  );
};

export default CreateStore;
