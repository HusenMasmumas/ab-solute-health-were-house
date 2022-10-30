import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import SearchForm from "component/Form/searchForm";
import { IsearchFormItem } from "component/Form/searchForm";
import CHeader from "component/headerPage/Header";
import { useNavigate } from "react-router-dom";
import { IDataType } from './interface'
import type { ColumnsType } from "antd/es/table";
import MoTable from "component/Table/MoTable";
import ContentContainer from 'component/container/ContentContainer'
import { useGetBranchs } from "service/branch";
import { IListBranch } from "service/branch/interface";
const elements: IsearchFormItem[] = [
  {
    name: "store",
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
  {
    name: "status",
    label: "การใช้งาน",
    input: {
      type: "select",
      options: {
        values: [
          { key: 1, value: "activs", label: "ใช้งาน" },
          {
            key: 2,
            value: "inactive",
            label: "ไม่มีการใช้งาน",
          },
        ],
        key: "stateProduct",
        label: "stateProduct",
      },
    },
  },
];

const columns: ColumnsType<IListBranch> = [
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
      return <div>หลังบ้านไม่ได้ส่งมาด้วย</div>
    }
  },
  {
    title: "เบอร์โทร",
    dataIndex: "phone",
  },
];

const StoresBranches = () => {
  const [limitPage, setLimitPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { data:dataList } = useGetBranchs()
  console.log('dataList', dataList);
  
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
        <SearchForm elements={elements} onFinish={onFinish} />
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
          />
        </ContentContainer>
    </>
  );
};

export default StoresBranches;
