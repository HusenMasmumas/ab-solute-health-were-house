import SearchForm, { IsearchFormItem } from "component/Form/searchForm";
import CHeader from "component/headerPage/Header";
import { useNavigate } from "react-router";
import { Switch } from "antd";
import { ColumnsType } from "antd/lib/table";
import { useState, useEffect } from "react";
import MoTable from "component/Table/MoTable";
import { DataType } from './interface'
import ContentContainer from "component/container/ContentContainer";
import { useGetRole } from "service/permission";
import { IGetRole } from "service/permission/interface";

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
  console.log('data',data?.result?.[0].data);

  useEffect(()=>{

  },[data])

  useEffect(() => {
    console.log("current", currentPage);
    console.log("limitPage", limitPage);
  }, [currentPage, limitPage]);

  const onChangePage = (page: number, type?: string) => {
    if (type === "pageSize") setLimitPage(page);
    else setCurrentPage(page);
  };

  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
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
      render: () => {
        return (
          <div className="mr-10">
            <Switch defaultChecked onChange={onChange} />
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
        />
      </ContentContainer>
    </>
  );
};

export default RoleManagement;

const Mockdata: DataType[] = [
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