import SearchForm, { IsearchFormItem } from "component/Form/searchForm";
import CHeader from "component/headerPage/Header";
import { useNavigate } from "react-router";
import { Switch } from "antd";
import { ColumnsType } from "antd/lib/table";
import { useState, useEffect } from "react";
import MoTable from "component/Table/MoTable";
import { DataType } from './interface'
import ContentContainer from "component/container/ContentContainer";
import { useGetRole, useUpdateRoleActive } from "service/permission";
import { IGetRole } from "service/permission/interface";
import { useQuery, useQueryClient } from '@tanstack/react-query'
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

const RoleManagement = () => {
  const navigate = useNavigate();
  const [limitPage, setLimitPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { data } = useGetRole()
  const queryClient = useQueryClient()
  const updateRoleActive = useUpdateRoleActive();

  useEffect(() => {
    console.log("current", currentPage);
    console.log("limitPage", limitPage);
  }, [currentPage, limitPage]);

  const onChangePage = (page: number, type?: string) => {
    if (type === "pageSize") setLimitPage(page);
    else setCurrentPage(page);
  };

  const onChange = (checked: boolean, record:IGetRole) => {
    updateRoleActive.mutate(
      {
        id:record.id,
        name:record.name,
        isActive: checked
      },
      {
        onSuccess: async () => {
          queryClient.invalidateQueries(["get-roles"])
        },
        onError: async () => {
          alert('onError')
        },
      }
    )
  };

  const onFinish = (values: any) => {
    //โยนเข้า create query
    console.log("Received values of form: ", values);
  };

  const columns: ColumnsType<IGetRole> = [
    {
      title: "#",
      dataIndex: "id",
      width: "7%",
      align: "center",
    },
    {
      title: "ชื่อบทบาท",
      dataIndex: "name",
    },
    {
      title: "การใช้งาน",
      dataIndex: "isActive",
      width: "10%",
      render: (_, record) => {
        return (
          <div className="mr-10">
            <Switch defaultChecked={record.isActive} onChange={(checked:boolean)=>{onChange(checked, record)}} />
          </div>
        );
      },
    },
  ];
  
  return (
    <>
      <CHeader
        keyHeader="manageUser"
        arrPath={["manageUser", "role"]}
        buttons={[
          { 
            colorButton: 'green',
            keytext: '+addRole',
            fn:  () => {
                  navigate("/user/create-role");
            }
          }
        ]}
      />
      <ContentContainer>
        <SearchForm elements={elements} onFinish={onFinish} />
        <MoTable
          rowKey={'id'}
          headerTable={'รายการบทบาท'}
          columns={columns}
          dataSource={data?.result?.[0].data || []}
          onChangePage={onChangePage}
          config={{
            total: data?.result?.[0].total, //ค่าจาก backend ใช้หารหน้า
            pageSize: limitPage,
            currentPage: currentPage,
          }}
          onRow={(record:IGetRole)=>({
            onClick:()=>{
              console.log('oneClick',record);
            },
            onDoubleClick: () => {
                queryClient.invalidateQueries(["get-role", record.id])
                navigate("/user/create-role",{state:{ id : record.id }});
              }
          })}
        />
      </ContentContainer>
    </>
  );
};

export default RoleManagement;
