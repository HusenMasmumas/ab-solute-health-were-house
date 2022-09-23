import React, { useEffect, useState } from "react";
import type { ColumnsType } from "antd/es/table";
import MoTable from "component/Table/MoTable";
type Props = {
  dataTable: DataType[];
  headerTable: string;
};

interface DataType {
  key: number;
  date: string;
  code: string;
  nameShop: string;
  fullname: string;
  tel: string;
  amount: string;
  state: string;
}

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
const OrderTable = ({ dataTable = [], headerTable = "", ...props }: Props) => {
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
  return (
    <div>
      <MoTable
        headerTable={headerTable}
        columns={columns}
        dataSource={dataTable}
        onChangePage={onChangePage}
        config={{
          total: 20, //ค่าจาก backend ใช้หารหน้า
          pageSize: limitPage,
          currentPage: currentPage,
        }}
      />
    </div>
  );
};

export default OrderTable;
