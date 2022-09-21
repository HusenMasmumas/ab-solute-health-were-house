import { Button, Col, Form, Input, Row } from "antd";
import { useTranslation } from "react-i18next";

const CreateRole = () => {
  const { t } = useTranslation();
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
      {/* form */}
      <div className="bg-white mt-[24px] px-[30px] py-[24px]">
        <div className="text-[#231F20] text-[28px] mb-[8px]">เพิ่มบทบาท</div>
        <Form layout="vertical">
          <Row gutter={[24, 0]}>
            <Col span={24}>
              <Form.Item label="ชื่อบทบาท">
                <Input placeholder="ชื่อบทบาท"></Input>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};
export default CreateRole;
