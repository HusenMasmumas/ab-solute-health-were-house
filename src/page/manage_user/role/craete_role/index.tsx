import { Button, Col, Form, Input, Row, Table } from "antd";
import { ColumnType } from "antd/lib/table";
import CHeader from "component/headerPage/Header";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import TableCreateRole from "./TableCreateRole";

interface DataType {
  key: number;
  name: string;
}
const CreateRole = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
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
    <>
      <CHeader
        keyHeader="manageUser"
        arrPath={["manageUser", "role", "addRole"]}
        buttons={[
          { colorButton: 'whilte',
            keytext: 'cancle',
            fn:  () => {
              navigate("/user/role");
            },
          },
          { colorButton: 'green',
            keytext: 'save',
            fn:  () => {
              navigate("/user/role");
            },
          }
        ]}
      />
      {/* form */}
      <div className="bg-white mt-[24px] px-[30px] py-[24px]">
        <div className="text-[#231F20] text-[20px] font-semibold mb-[8px]">
          เพิ่มบทบาท
        </div>
        <Form layout="vertical">
          <Row gutter={[24, 0]}>
            <Col span={24}>
              <Form.Item label="ชื่อบทบาท">
                <Input className="input-form" placeholder="ชื่อบทบาท" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
      {/* table */}
      <div className="bg-white mt-[24px] px-[30px] py-[24px]">
        <TableCreateRole dataTable={data}></TableCreateRole>
      </div>
    </>
  );
};
export default CreateRole;
