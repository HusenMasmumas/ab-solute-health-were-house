import {  Col, Form, Input, Row } from "antd";
import { ColumnsType, ColumnType } from "antd/lib/table";
import CHeader from "component/headerPage/Header";
import MoTable from "component/Table/MoTable";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import TableCreateRole from "./TableCreateRole";
import { ReactComponent as MenuBar } from "assets/Icon/menubar/Menu.svg";
import { ReactComponent as MenuBar1 } from "assets/Icon/menubar/Menu1.svg";
import { ReactComponent as MenuBar2 } from "assets/Icon/menubar/Menu2.svg";
import { ReactComponent as MenuBar3 } from "assets/Icon/menubar/Menu3.svg";
import { ReactComponent as MenuBar4 } from "assets/Icon/menubar/Menu4.svg";
import { ReactComponent as MenuBar5 } from "assets/Icon/menubar/Menu5.svg";
import React, { SVGProps } from "react";
interface DataType {
  key: number;
  name: string;
  icon: any;
}

const columns: ColumnsType<DataType> = [
  {
    title: "ชื่อเมนู",
    dataIndex: "name",
    render: (name: string, record:DataType) => {
      return (
        <div className="flex items-center">{record.icon}{name}</div>
      ) 
    },
  },
];
const CreateRole = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
  };
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
      <div className="bg-white mt-[24px] px-[30px] py-[24px]">
        <MoTable 
          key='key'
          rowKey='key'
          pagination={false} 
          columns={columns} 
          dataSource={MockData}
          rowSelection={rowSelection}
        />
      </div>
    </>
  );
};
export default CreateRole;

const MockData: DataType[] = [
  {
    key: 1,
    name: "ภาพรวม",
    icon: <MenuBar className="!w-6 !h-6 mr-2"/>
  },
  {
    key: 2,
    name: "การจักการคลัง",
    icon: <MenuBar1 className="!w-6 !h-6 mr-2"/>
  },
  {
    key: 3,
    name: "รายงาน",
    icon: <MenuBar2 className="!w-6 !h-6 mr-2"/>
  },
  {
    key: 4,
    name: "ร้านค้า&สาขา",
    icon: <MenuBar3 className="!w-6 !h-6 mr-2"/>
  },
  {
    key: 5,
    name: "จัดการผู้ใช้",
    icon: <MenuBar4 className="!w-6 !h-6 mr-2"/>
  },
  {
    key: 6,
    name: "จัดการผู้ใช้",
    icon: <MenuBar5 className="!w-6 !h-6 mr-2"/>
  },
];
