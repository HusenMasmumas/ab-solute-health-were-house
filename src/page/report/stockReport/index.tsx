import { ColumnsType } from "antd/lib/table";
import SearchForm, { IsearchFormItem } from "component/Form/searchForm";
import CHeader from "component/headerPage/Header";
import MoTable from "component/Table/MoTable";
import { t } from "i18next";
import { useState, useEffect } from "react";
import { IStockTable } from './interface'

const StockReport = () => {
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
      <CHeader keyHeader="report" arrPath={["report", "stockReport"]} />
      <SearchForm elements={elements} onFinish={onFinish} />
      <MoTable
        headerTable={t("stockReport")}
        columns={columns}
        dataSource={Mockdata}
        onChangePage={onChangePage}
        config={{
          total: 20, //ค่าจาก backend ใช้หารหน้า
          pageSize: limitPage,
          currentPage: currentPage,
        }}
        actions={[{
          type: 'excel',
          fn: ()=>{console.log('download excel');
          }
        }]}
      />
    </>
  );
};

export default StockReport;

const elements: IsearchFormItem[] = [
  {
    name: "date",
    label: "วัน",
    input: {
      type: "date-picker",
      options: {
        search: true,
      },
    },
  },
  {
    name: "code",
    label: "เลขที่ใบสั่งซื้อ",
    input: {
      type: "input",
      options: {
        search: true,
      },
    },
  },
  {
    name: "nameShop",
    label: "ชื่อร้าน",
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
    name: "state",
    label: "สถานะ",
    input: {
      type: "select",
      options: {
        values: [
          { key: 1, value: "success", label: "เรียบร้อย" },
          { key: 2, value: "notsuccess", label: "ไม่เรียบร้อย" },
        ],
      },
    },
  },
];

const columns: ColumnsType<IStockTable> = [
  {
    title: "#",
    dataIndex: "key",
    align: "center",
    width: "7%",
  },
  {
    title: "วันที่",
    dataIndex: "date",
    width: "12%",
  },
  {
    title: "รหัสสินค้า",
    dataIndex: "code",
    width: "15%",
  },
  {
    title: "ชื่อสินค้า",
    dataIndex: "nameProduct",
    width: "22%",
  },
  {
    title: "ปริมาณ",
    dataIndex: "amount",
    width: "10%",
  },
  {
    title: "ราคาต้นทุน",
    dataIndex: "costPrice",
    width: "10%",
  },
  {
    title: "ราคาขายปลีก",
    dataIndex: "retailPrice",
    width: "10%",
  },
  {
    title: "สถานะ",
    dataIndex: "state",
    render: (state: string) => {
      return (
        <div className="text-white">
          {state === "เปิดการขาย" ? (
            <div className="bg-green rounded-[4px] w-[130px] flex justify-center py-[4px]">
              {state}
            </div>
          ) : state === "ปิดการขาย" ? (
            <div className="bg-darkgray rounded-[4px] w-[130px] flex justify-center py-[4px]">
              {state}
            </div>
          ) : null}
        </div>
      );
    },
  },
];

const Mockdata: IStockTable[] = [
  {
    key: 1,
    code: "PO453671668",
    date: "20/08/2565",
    costPrice: 200,
    nameProduct: "คลอเฟนิรามีน",
    retailPrice: 500,
    sku: "S1234556",
    amount: 100,
    state: "เปิดการขาย",
  },
  {
    key: 2,
    code: "PO453671668",
    date: "20/08/2565",
    costPrice: 400.0,
    nameProduct: "กรดพาราอะมิโนเบนโซอิก",
    retailPrice: 500.0,
    sku: "S1234556",
    amount: 100,
    state: "ปิดการขาย",
  },
];
