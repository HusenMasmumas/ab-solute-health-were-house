import SearchForm, { IsearchFormItem } from "component/Form/searchForm";
import { useNavigate } from "react-router";
import CHeader from "component/headerPage/Header";
import { useEffect, useState } from "react";
import { Form, Switch } from "antd";
import { ColumnsType } from "antd/lib/table";
import MoTable from "component/Table/MoTable";
import ContentContainer from "component/container/ContentContainer";
import CImage from "component/Image/CImage";
import { IGetUsers} from "service/user/interface";
import { useGetUsers, useUpdateUser } from "service/user";

const elements: IsearchFormItem[] = [
  {
    name: "search",
    label: "ชื่อ-นามสกุล(ผู้จัดการ)",
    input: {
      type: "input",
      options: {
        search: true,
      },
    },
  },
  {
    name: "phone",
    label: "เบอร์โทร",
    input: {
      type: "input",
      options: {
        search: true,
      },
    },
  },
  {
    name: "email",
    label: "อีเมล",
    input: {
      type: "input",
      options: {
        search: true,
      },
    },
  },
  {
    name: "roleId",
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

const UserManagement = () => {
  const navigate = useNavigate();
  const [limitPage, setLimitPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [search, setSearch] = useState<any>(
    {
      page: 1,
      limit: 1,
      orderBy:'DESC',
    }
  );
  const { data:dataUsers } = useGetUsers(search);
  const updateUser = useUpdateUser();
  const [form] = Form.useForm();
  const activeUSer = (checked: boolean, record:any) => {
    //อัพเดตรไม่ได้
    // console.log(`switch to ${checked}`);
    record.isActive = checked;
    // console.log('record after',record);
    updateUser.mutate(
      record,
      {
        onSuccess: async () => {
          alert('success ขี้น success แต่ยังใช้ไม่ได้')
        },
        onError: async (errorStr) => {
          alert(errorStr)
        },
      }
    )
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
      render( _ , record) {
        return (<span>{record.role.name}</span>)
      },
    },
  
    {
      title: "สถานะ",
      dataIndex: "status",
      width: "7%",
      render: ( _ , record) => {
        return <Switch defaultChecked onChange={(value)=>{ activeUSer(value, record) }} />;
      },
    },
  ];
  
  useEffect(() => {
    let temp = {...search}
    temp.page = currentPage
    temp.limit = limitPage 
    setSearch({...temp})
  }, [currentPage, limitPage]);

  const onChangePage = (page: number, type?: string) => {
    if (type === "pageSize") setLimitPage(page);
    else setCurrentPage(page);
  };

  const onFinish = (values: any) => {
    setSearch(
      {
        page: currentPage,
        limit: limitPage,
        orderBy:'DESC',
        search: values.search,
        phone: values.phone,
        email: values.email,
        roleId: values.roleId
      }
    )
  };

  const onReset = ()=>{
    form.resetFields();
    setSearch(
      {
        page: currentPage,
        limit: limitPage,
        orderBy:'DESC',
        search: '',
        phone: '',
        email: '',
        roleId: undefined
      }
    )
  }

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
        <SearchForm elements={elements} onFinish={onFinish} form={form} onReset={onReset}/>
        <MoTable
          headerTable={'จัดการผู้ใช้'}
          columns={columns}
          rowKey={'id'}
          dataSource={dataUsers?.result[0].data}
          onChangePage={onChangePage}
          config={{
            total: dataUsers?.result[0].total ?? 0 / limitPage,
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

