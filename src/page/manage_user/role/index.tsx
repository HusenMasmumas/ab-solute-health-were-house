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
    <>
      <CHeader
        keyHeader="manageUser"
        arrPath={["manageUser", "role"]}
        buttons={[
          { 
            colorButton: 'green',
            keytext: 'createrole',
            fn:  () => {
                  navigate("/user/create-role");
            }
          }
        ]}
      />
      <SearchForm elements={elements} onFinish={onFinish} />
      <TableRoleManagement dataTable={data}></TableRoleManagement>
      
    </>
  );
};

export default RoleManagement;
