import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { PaginationProps } from "antd";
import TableStoresBranches from "views/stores_branches/TableStoresBranches";
import SearchForm from "component/Form/searchForm";
import { IsearchFormItem } from "component/Form/searchForm";
import CHeader from "component/headerPage/Header";
import { useNavigate } from "react-router-dom";
import { IDataType } from './interface'
import type { ColumnsType } from "antd/es/table";
import MoTable from "component/Table/MoTable";
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

const columns: ColumnsType<IDataType> = [
  {
    title: "#",
    dataIndex: "key",
    align: "center",
    width: "7%",
  },
  {
    title: "ชื่อร้าน",
    dataIndex: "store",
    width: "20%",
  },
  {
    title: "ชื่อนามสกุล(ผู้จัดการ)",
    dataIndex: "name",
  },
  {
    title: "เบอร์โทร",
    dataIndex: "phone",
  },
];


const data: IDataType[] = [];
for (let i = 0; i < 10; i++) {
  data.push({
    key: i,
    store: `ร้านขายยาวังทองหลาง`,
    name: `สมพงษ์ ตามังกร`,
    phone: "09123456789",
    status: true,
  });
}

const StoresBranches = () => {
  const [limitPage, setLimitPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { t } = useTranslation();
  const navigate = useNavigate();

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
      <SearchForm elements={elements} onFinish={onFinish} />
      <MoTable
        headerTable={t("orderlist")}
        columns={columns}
        dataSource={data}
        onChangePage={onChangePage}
        config={{
          total: 20, //ค่าจาก backend ใช้หารหน้า
          pageSize: limitPage,
          currentPage: currentPage,
        }}
      />
    </>
  );
};

export default StoresBranches;
