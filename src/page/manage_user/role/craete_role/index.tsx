import { Button, Col, Form, Input, Row, Table } from "antd";
import { ColumnType } from "antd/lib/table";
import CHeader from "component/headerPage/Header";
import { useTranslation } from "react-i18next";
import TableCreateRole from "./TableCreateRole";

interface DataType {
  key: number;
  name: string;
}
const CreateRole = () => {
  const { t } = useTranslation();

  const data: DataType[] = [
    {
      key: 1,
      name: "ภาพรวม",
    },
    {
      key: 2,
      name: "การจักการคลัง",
    },
    {
      key: 3,
      name: "การจักการคลัง",
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-2">
        <CHeader
          keyHeader="manageUser"
          arrPath={["manageUser", "role", "addRole"]}
        />
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
      {/* form */}
      <div className="bg-white mt-[24px] px-[30px] py-[24px]">
        <div className="text-[#231F20] text-[28px] mb-[8px]">เพิ่มบทบาท</div>
        <Form layout="vertical">
          <Row gutter={[24, 0]}>
            <Col span={24}>
              <Form.Item label="ชื่อบทบาท">
                <Input placeholder="ชื่อบทบาท" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
      {/* table */}
      <div className="bg-white mt-[24px] px-[30px] py-[24px]">
        <TableCreateRole dataTable={data}></TableCreateRole>
      </div>
    </div>
  );
};
export default CreateRole;
