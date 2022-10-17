import { useEffect, useState } from "react";
import SearchForm, { IsearchFormItem } from "component/Form/searchForm";
import CHeader from "component/headerPage/Header";
import { t } from "i18next";
import MoTable from "component/Table/MoTable";
import { DataType } from './interface'
import { ColumnsType } from "antd/lib/table";
import ContentContainer from "component/container/ContentContainer";


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
    label: "รหัสสินค้า",
    input: {
      type: "input",
      options: {
        search: true,
      },
    },
  },
  {
    name: "SKU",
    label: "SKU",
    input: {
      type: "input",
      options: {
        search: true,
      },
    },
  },
  {
    name: "name",
    label: "ชื่อสินค้า",
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
          { key: 1, value: "notDamage", label: "ไม่เสียหาย" },
          { key: 2, value: "damage", label: "เสียหาย" },
        ],
      },
    },
  },
];

const columns: ColumnsType<DataType> = [
  {
    title: "#",
    dataIndex: "key",
    align: "center",
    width: "7%",
  },
  {
    title: "วันที่",
    dataIndex: "date",
    width: "15%",
  },
  {
    title: "รหัสสินค้า",
    dataIndex: "code",
    width: "15%",
  },
  {
    title: "SKU",
    dataIndex: "sku",
    width: "15%",
  },
  {
    title: "ชื่อสินค้า  ",
    dataIndex: "name",
    width: "15%",
  },
  {
    title: "จำนวน",
    dataIndex: "amount",
    width: "18%",
  },
  {
    title: "สถานะ",
    dataIndex: "state",
    render: (state: string) => {
      return (
        <div className="text-white">
          {state === "ไม่เสียหาย" ? (
            <div className="bg-green rounded-[4px] w-[130px] flex justify-center py-[4px]">
              {state}
            </div>
          ) : state === "เสียหาย" ? (
            <div className="bg-darkgray rounded-[4px] w-[130px] flex justify-center py-[4px]">
              {state}
            </div>
          ) : null}
        </div>
      );
    },
  },
];

const DamageReport = () => {
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
      <CHeader keyHeader="report" arrPath={["report", "damageReport"]} />
      <ContentContainer>
        <SearchForm elements={elements} onFinish={onFinish} />
        <MoTable
          scroll={{x:900}}
          headerTable={t("damageReport")}
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
      </ContentContainer>
    </>
  );
};

export default DamageReport;

const Mockdata: DataType[] = [
  {
    key: 1,
    date: "20/08/2565",
    code: "PO453671668",
    sku: "S1234556",
    name: "สมพงษ์ ตามังกร",
    amount: 100,
    state: "ไม่เสียหาย",
  },
  {
    key: 2,
    date: "20/08/2565",
    code: "PO453671668",
    sku: "S1234556",
    name: "อัญญา เบญจมินทร์",
    amount: 100,
    state: "เสียหาย",
  },
];