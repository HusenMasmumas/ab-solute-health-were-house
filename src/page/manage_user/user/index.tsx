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
import { useGetRole } from "service/permission";
import { useQueryClient } from "@tanstack/react-query";

const UserManagement = () => {
  const navigate = useNavigate();
  const [limitPage, setLimitPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const queryClient = useQueryClient();
  const [search, setSearch] = useState<any>(
    {
      page: 1,
      limit: 1,
      orderBy:'DESC',
    }
  );
  const { data:dataUsers } = useGetUsers(search);
  const updateUser = useUpdateUser();
  const {data:listRoles} = useGetRole()
  const [form] = Form.useForm();

  const activeUSer = (checked: boolean, record:IGetUsers) => {
    const temp = {
      id:          record.id,
      firstName:   record.firstName,
      lastName:    record.lastName,
      isActive:    checked,
      username:    record.username,
      phone:       record.phone,
      email:       record.email,
      address:     record.address,
      district:    record.district,
      province:    record.province,
      subDistrict: record.subDistrict,
      zipcode:     record.zipcode,
      roleId:      record.roleId,
    }
    updateUser.mutate(
      temp,
      {
        onSuccess: async () => {
          queryClient.invalidateQueries(['get-users'])
        },
        onError: async (errorStr) => {
          alert(errorStr)
        },
      }
    )
  };

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
          values: listRoles?.result[0].data.map((item)=>{
             return { key:item.id, value:item.id, label: item.name }
          }) || [],
        },
      },
    },
    {
      name: "isActive",
      label: "การใช้งาน",
      input: {
        type: "select",
        options: {
          values: [
            { key: 1, value: true, label: "ใช้งาน" },
            { key: 2, value: false, label: "ไม่ใช้งาน" },
          ],
        },
      },
    },
  ];

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
      dataIndex: "isActive",
      width: "7%",
      render: ( value , record) => {
        return <Switch defaultChecked={value} onChange={(value)=>{ activeUSer(value, record) }} />;
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
        roleId: values.roleId,
        isActive: values.isActive
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
        roleId: undefined,
        isActive: null
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

