import { useTranslation } from "react-i18next";
import SearchForm, { IsearchFormItem } from "component/Form/searchForm";
import { useNavigate } from "react-router";
import Profile from "../../../assets/img/profile.jpg";
import Profile2 from "../../../assets/img/profile-2.jpg";
import CHeader from "component/headerPage/Header";
import { DataType } from "./interface";
import { useEffect, useState } from "react";
import { Switch, Image } from "antd";
import { ColumnsType } from "antd/lib/table";
import MoTable from "component/Table/MoTable";
import ContentContainer from "component/container/ContentContainer";

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


const onChange = (checked: boolean) => {
  console.log(`switch to ${checked}`);
};

const columns: ColumnsType<DataType> = [
  {
    title: "#",
    dataIndex: "key",
    align: "center",
    width: "7%",
  },
  {
    title: "ภาพโปรไฟล์",
    dataIndex: "profile",
    width: "10%",
    render: (profile: string) => {
      return (
        <div className="w-[50px] h-[50px]">
          <Image
            style={{ borderRadius: "100%" }}
            src={profile}
            alt="profile"
            preview={false}
          ></Image>
        </div>
      );
    },
  },
  {
    title: "ชื่อ-นามสกุล (ผู้จัดการ)",
    dataIndex: "name",
    width: "16%",
  },
  {
    title: "เบอร์โทร",
    dataIndex: "phone",
    width: "16%",
  },
  {
    title: "อีเมล",
    dataIndex: "email",
    width: "20%",
  },
  {
    title: "บทบาท",
    dataIndex: "role",
  },

  {
    title: "สถานะ",
    dataIndex: "status",
    width: "7%",
    render: (status) => {
      return <Switch defaultChecked onChange={onChange} />;
    },
  },
];

const Mockdata: DataType[] = [
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

const UserManagement = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [limitPage, setLimitPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    console.log("current", currentPage);
    console.log("limitPage", limitPage);
  }, [currentPage, limitPage]);

  const onChangePage = (page: number, type?: string) => {
    if (type === "pageSize") setLimitPage(page);
    else setCurrentPage(page);
  };

  const onFinish = (values: any) => {
    //โยนเข้า create query
    console.log("Received values of form: ", values);
  };

  return (
    <>
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
      <ContentContainer>
        <SearchForm elements={elements} onFinish={onFinish} />
        <MoTable
          headerTable={'จัดการผู้ใช้'}
          columns={columns}
          dataSource={Mockdata}
          onChangePage={onChangePage}
          config={{
            total: 20, //ค่าจาก backend ใช้หารหน้า
            pageSize: limitPage,
            currentPage: currentPage,
          }}
        />
      </ContentContainer>
    </>
  );
};

export default UserManagement;

