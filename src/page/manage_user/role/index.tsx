import SearchForm, { IsearchFormItem } from "component/Form/searchForm";
import CHeader from "component/headerPage/Header";
import { t } from "i18next";
import React from "react";
import { useNavigate } from "react-router";
import TableRoleManagement from "views/manage_user/role_mangement/TableRoleManagement";

type Props = {};
interface DataType {
  key: number;
  role: string;
  status: boolean;
}
const elements: IsearchFormItem[] = [
  {
    name: "role",
    label: "ชื่อบทบาท",
    input: {
      type: "input",
      options: {
        search: true,
      },
    },
  },
  {
    name: "status",
    label: "การใช้งาน",
    input: {
      type: "select",
      options: {
        values: [
          { key: 1, value: "active", label: "ใช้งาน" },
          { key: 2, value: "inactive", label: "ไม่ใช้งาน" },
        ],
      },
    },
  },
];

const RoleManagement = (props: Props) => {
  const navigate = useNavigate();
  const data: DataType[] = [
    {
      key: 1,
      role: "ผู้จัดการ",
      status: true,
    },
    {
      key: 2,
      role: "ผู้จัดการ",
      status: true,
    },
  ];

  const onFinish = (values: any) => {
    //โยนเข้า create query
    console.log("Received values of form: ", values);
  };
  return (
    <div className="bg-[#F5F5F5] m-0 p-0 ">
      <CHeader
        keyHeader="manageUser"
        nevigate={{
          keytext: "createrole",
          fn: () => {
            navigate("/user/create-role");
          },
        }}
        // arrPath={[t('manageUser'), t('role') ]}
        arrPath={["manageUser", "role"]}
      />
      <div>
        <SearchForm elements={elements} onFinish={onFinish} />
      </div>
      {/* Table */}
      <div className="mt-10 bg-white">
        <TableRoleManagement dataTable={data}></TableRoleManagement>
      </div>
    </div>
  );
};

export default RoleManagement;
