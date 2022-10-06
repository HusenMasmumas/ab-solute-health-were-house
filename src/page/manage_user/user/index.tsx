import { useTranslation } from "react-i18next";
import TableUserManagement from "views/manage_user/user_mangement/TableUserManagement";
import SearchForm, { IsearchFormItem } from "component/Form/searchForm";
import { useNavigate } from "react-router";
import Excel from "../../../assets/img/Excel.png";
import { Image } from "antd";
import Profile from "../../../assets/img/profile.jpg";
import Profile2 from "../../../assets/img/profile-2.jpg";
import CHeader from "component/headerPage/Header";

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
      profile: Profile,
      name: "pangpang",
      phone: "0912345678",
      email: "pp@gmail.com",
      role: "ผู้จัดการ",
      status: true,
    },
    {
      key: 2,
      profile: Profile2,
      name: "prakaifa",
      phone: "09874561230",
      email: "ppjj@gmail.com",
      role: "ผู้จัดการ",
      status: true,
    },
  ];
  return (
    <div>
      <CHeader
        keyHeader="manageUser"
        arrPath={["manageUser", "user"]}
        buttons={[
          { 
            colorButton: 'green',
            keytext: 'createUser',
            fn:  () => {
                  navigate("/user/create-user");
            }
          }
        ]}
      />

      <div>
        <div className="mt-[24px]">
          <SearchForm elements={elements} onFinish={onFinish} />
        </div>
        <div className="bg-white px-[24px] py-[16px] mt-[16px]">
          <div className="grid grid-cols-2">
            <span className="text-[#231F20] font-semibold text-[20px]">
              จัดการผู้ใช้
            </span>
            <div className="flex items-center justify-end gap-4">
              <span className="text-[20px] border-r-[1px] border-gray pr-4 ">
                ลบ
              </span>

              <div className="w-[45px] h-[45px] bg-[#F5F5F5] p-[10px] rounded-[4px] mb-[8px]">
                <Image src={Excel} alt="excel" preview={false}></Image>
              </div>
            </div>
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
