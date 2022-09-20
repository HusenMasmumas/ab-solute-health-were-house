import React from "react";
import { useTranslation } from "react-i18next";
import TableUserManagement from "views/manage_user/user_mangement/TableUserManagement";
interface DataType {
  key: number;
  profile: string;
  name: string;
  phone: string;
  email: string;
  role: string;
  status: boolean;
}

const UserManagement = () => {
  const { t } = useTranslation();

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
      <div className="bg-white">{`${t("จัดการผู้ใช้")}`}</div>
      <div>
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
      {/* <div>
        <SearchForm elements={elements} onFinish={onFinish} />
      </div> */}
    </div>
  );
};

export default UserManagement;
