import React from "react";
import { useTranslation } from "react-i18next";
import TableUserManagement from "views/manage_user/user_mangement/TableUserManagement";
import SearchForm, { IsearchFormItem } from "component/Form/searchForm";
import CHeader from "component/headerPage/Header";
import CreateButton from "component/Button/CreateButton";
import { useNavigate } from "react-router";

type Props = {};

interface DataType {
  key: number;
  profile: string;
  name: string;
  phone: string;
  email: string;
  role: string;
  status: boolean;
}

const elements: IsearchFormItem[] = [
  {
    name: "fullname",
    label: "ชื่อ-นามสกุล(ผู้จัดการ)",
    input: {
      type: "input",
      options: {
        search: true,
      },
    },
  },
  {
    name: "tel",
    label: "เบอร์โทร",
    input: {
      type: "input",
      options: {
        search: true,
      },
    },
  },
  {
    name: "mail",
    label: "อีเมล",
    input: {
      type: "input",
      options: {
        search: true,
      },
    },
  },
  {
    name: "role",
    label: "บทบาท",
    input: {
      type: "select",
      options: {
        values: [
          { key: 1, value: "marketing", label: "การตลาด" },
          { key: 2, value: "manager", label: "ผู้จัดการ" },
        ],
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

const onFinish = (values: any) => {
  //โยนเข้า create query
  console.log("Received values of form: ", values);
};

const UserManagement = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const data: DataType[] = [
    {
      key: 1,
      profile: "picture",
      name: "pangpang",
      phone: "0912345678",
      email: "pp@gmail.com",
      role: "ผู้จัดการ",
      status: true,
    },
    {
      key: 2,
      profile: "picture",
      name: "prakaifa",
      phone: "09874561230",
      email: "ppjj@gmail.com",
      role: "ผู้จัดการ",
      status: true,
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-2">
        <div className="text-[30px] text-darkblue font-bold">
          <span>{`${t("จัดการผู้ใช้")}`}</span>
        </div>
        <div className="grid justify-end items-center">
          <CreateButton
            onClick={() => {
              navigate("/user/create-user");
            }}
          >
            + เพิ่มผู้ใช้
          </CreateButton>
        </div>
      </div>

      <div>
        <div className="mt-[24px]">
          <SearchForm elements={elements} onFinish={onFinish} />
        </div>
        <div className="bg-white px-[24px] py-[16px] mt-[16px]">
          <div className="grid grid-cols-2">
            <span className="text-[#231F20] text-[22px]">จัดการผู้ใช้</span>
            <div className="grid items-center justify-end">Exel</div>
          </div>
          <div className="ant-table-cell ant-table-selection-column ant-table-cell.ant-table-tbody">
            <TableUserManagement dataTable={data}></TableUserManagement>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
