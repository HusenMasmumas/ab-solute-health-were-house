import SearchForm, { IsearchFormItem } from "component/Form/searchForm";
import { useNavigate } from "react-router";
import CHeader from "component/headerPage/Header";
import { useEffect, useState } from "react";
import { Switch } from "antd";
import { ColumnsType } from "antd/lib/table";
import MoTable from "component/Table/MoTable";
import ContentContainer from "component/container/ContentContainer";
import CImage from "component/Image/CImage";
import { IGetUsers } from "service/user/interface";
import { useGetUsers } from "service/user";

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

const columns: ColumnsType<IGetUsers> = [
  {
    title: "#",
    dataIndex: "id",
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
          <CImage.CIcon />
        </div>
      );
    },
  },
  {
    title: "ชื่อ-นามสกุล (ผู้จัดการ)",
    dataIndex: "name",
    width: "16%",
    render:(_, data)=>{
      return (
        <span>{data.firstName} {data.lastName}</span>
      )
    }
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
    dataIndex: "role.name",
    render(_, record) {
      return (<span>{record.role.name}</span>)
    },
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

const UserManagement = () => {
  const navigate = useNavigate();
  const { data:dataUsers } = useGetUsers();
  const [limitPage, setLimitPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);
  
  useEffect(() => {

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
          rowKey={'id'}
          dataSource={dataUsers?.result[0].data}
          onChangePage={onChangePage}
          config={{
            total: dataUsers?.result[0].total, //ค่าจาก backend ใช้หารหน้า
            pageSize: limitPage,
            currentPage: currentPage,
          }}
          onRow={(record:IGetUsers)=>({
            onDoubleClick: () => {
                navigate("/user/create-user",{state:{ id : record.id }});
              }
          })}
        />
      </ContentContainer>
    </>
  );
};

export default UserManagement;

