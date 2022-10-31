import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import SearchForm from "component/Form/searchForm";
import { IsearchFormItem } from "component/Form/searchForm";
import CHeader from "component/headerPage/Header";
import { useNavigate } from "react-router-dom";
import type { ColumnsType } from "antd/es/table";
import MoTable from "component/Table/MoTable";
import ContentContainer from 'component/container/ContentContainer'
import { useGetBranchs } from "service/branch";
import { IBranch } from "service/branch/interface";
import { Form } from "antd";
const elements: IsearchFormItem[] = [
  {
    name: "branchName",
    label: "ชื่อร้าน",
    input: {
      type: "input",
      options: {
        search: true,
      },
    },
  },
  {
    name: "name",
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
];

const columns: ColumnsType<IBranch> = [
  {
    title: "#",
    dataIndex: "id",
    align: "center",
    width: "7%",
  },
  {
    title: "ชื่อร้าน",
    dataIndex: "name",
    width: "20%",
  },
  {
    title: "ชื่อนามสกุล(ผู้จัดการ)",
    render: (_, record) =>{
      return <div className="flex space-x-4"><span>{record.firstName}</span><span>{record.lastName}</span></div>
    }
  },
  {
    title: "เบอร์โทร",
    dataIndex: "phone",
  },
];

const StoresBranches = () => {
  const [limitPage, setLimitPage] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [search, setSearch] = useState<any>(
    {
      page: 1,
      limit: 1,
      orderBy:'DESC',
    }
  );
  const { data:dataList } = useGetBranchs(search)
  
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
        branchName: values?.branchName,
        name: values?.name,
        phone: values?.phone
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
        branchName: '',
        name: '',
        phone: ''
      }
    )
  }
  
  return (
    <>
      <CHeader
        keyHeader="stores&branches"
        arrPath={["stores&branches"]}
        buttons={[
          { colorButton: 'green',
            keytext: 'createShop',
            fn:  () => {
              navigate("/craete-stores-branches");
            },
          }
        ]}
      />  
      <ContentContainer>
        <SearchForm elements={elements} onFinish={onFinish} form={form} onReset={onReset}/>
        <MoTable
          headerTable={t("orderlist")}
          rowKey={'id'}
          columns={columns}
          dataSource={dataList?.result[0].data}
          onChangePage={onChangePage}
          config={{
            total: dataList?.result[0].total ?? 0 / limitPage, 
            pageSize: limitPage,
            currentPage: currentPage,
          }}
          onRow={(record:IBranch)=>({
            onClick:()=>{
              // console.log('oneClick',record);
            },
            onDoubleClick: () => {
                // console.log(record);
                navigate("/craete-stores-branches",{state:{ id : record.id }});
              }
          })}
          />
        </ContentContainer>
    </>
  );
};

export default StoresBranches;
