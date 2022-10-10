import { ColumnsType } from "antd/lib/table";
import SearchForm, { IsearchFormItem } from "component/Form/searchForm";
import CHeader from "component/headerPage/Header";
import MoTable from "component/Table/MoTable";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { DataType } from "./interface";

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
    name: "fullname",
    label: "ชื่อ-นามสกุล",
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

const columns: ColumnsType<DataType> = [
  {
    title: "#",
    dataIndex: "key",
    align: "center",
    width: "7%",
  },
  {
    title: "วันที่สั่งซื้อ",
    dataIndex: "date",
    width: "12%",
  },
  {
    title: "เลขที่ใบสั่งซื้อ",
    dataIndex: "code",
    width: "18%",
  },
  {
    title: "ชื่อสาขา",
    dataIndex: "nameShop",
    width: "18%",
  },
  {
    title: "ชื่อนามสกุล",
    dataIndex: "fullname",
    width: "18%",
  },
  {
    title: "เบอร์โทร",
    dataIndex: "tel",
    width: "15%",
  },
  {
    title: "รวม(฿)",
    dataIndex: "amount",
    width: "25%",
  },
  {
    title: "สถานะ",
    dataIndex: "state",
    render: (state: string) => {
      return (
        <div className="text-white">
          {state === "เรียบร้อย" ? (
            <div className="bg-green rounded-[4px] w-[130px] flex justify-center py-[4px]">
              {state}
            </div>
          ) : state === "รออนุมัติ" ? (
            <div className="bg-darkgray rounded-[4px] w-[130px] flex justify-center py-[4px]">
              {state}
            </div>
          ) : state === "เตรียมสินค้า" ? (
            <div className="bg-lightblue rounded-[4px] w-[130px] flex justify-center py-[4px]">
              {state}
            </div>
          ) : state === "ยกเลิก" ? (
            <div className="bg-[#FC0002] rounded-[4px] w-[130px] flex justify-center py-[4px]">
              {state}
            </div>
          ) : null}
        </div>
      );
    },
  },
];

const OrderReport = () => {
  const { t } = useTranslation();
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
      <CHeader keyHeader="report" arrPath={["report", "orderReport"]} />
      <SearchForm elements={elements} onFinish={onFinish} />
      <MoTable
        scroll={{x:900}}
        headerTable={t("orderReport")}
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

export default OrderReport;



const Mockdata: DataType[] = [
  {
    key: 1,
    date: "20/08/2565",
    code: "PO453671668",
    nameShop: "ร้านขายยาวังทองหลาง",
    fullname: "สมพงษ์ ตามังกร",
    amount: "300",
    tel: "0934213455",
    state: "เรียบร้อย",
  },
  {
    key: 2,
    date: "20/08/2565",
    code: "PO453671668",
    nameShop: "ร้านขายยากรุงเทพฯ",
    fullname: "อัญญา เบญจมินทร์",
    tel: "0934213455",
    amount: "300",
    state: "รออนุมัติ",
  },
  {
    key: 3,
    date: "20/08/2565",
    code: "PO453671668",
    nameShop: "ร้านขายยาแอ็บโซลูท เฮลธ์",
    fullname: "สมพงษ์ ตามังกร",
    amount: "300",
    tel: "0934213455",
    state: "เตรียมสินค้า",
  },
  {
    key: 4,
    date: "20/08/2565",
    code: "PO453671668",
    nameShop: "ร้านขายยาแอ็บโซลูท 2",
    fullname: "อัญญา เบญจมินทร์",
    tel: "0934213455",
    amount: "300",
    state: "ยกเลิก",
  },
];
