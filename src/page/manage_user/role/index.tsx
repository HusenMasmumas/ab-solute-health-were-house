import SearchForm, { IsearchFormItem } from "component/Form/searchForm";
import CHeader from "component/headerPage/Header";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import TableRoleManagement from "views/manage_user/role_mangement/TableRoleManagement";
import { Image } from "antd";
import Excel from "../../../assets/img/Excel.png";

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
  const { t } = useTranslation();
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
    <div className="bg-bgcolor">
      <CHeader
        keyHeader="manageUser"
        nevigate={{
          keytext: "createrole",
          fn: () => {
            navigate("/user/create-role");
          },
        }}
        arrPath={["manageUser", "role"]}
      />
      <div className=" mt-[24px]">
        <SearchForm elements={elements} onFinish={onFinish} />
      </div>
      {/* Table */}
      <div className="bg-white px-[24px] py-[16px] mt-[16px]">
        <div className="grid grid-cols-2">
          <span className="text-[#231F20] text-[28px]">รายการบทบาท</span>
          <div className="flex items-center justify-end">
            <div className="w-[45px] h-[45px] bg-[#F5F5F5] p-[10px] rounded-[4px] mb-[8px]">
              <Image src={Excel} alt="excel" preview={false}></Image>
            </div>
          </div>
        </div>

        <TableRoleManagement dataTable={data}></TableRoleManagement>
      </div>
    </div>
  );
};

export default RoleManagement;
