import React, { useEffect, useState } from "react";
import type { ColumnsType } from "antd/es/table";
import MoTable from "component/Table/MoTable";
type Props = {
  dataTable: IImportTable[];
  headerTable: string;
};

interface IImportTable {
  key: React.Key;
  date: string;
  code: string;
  sku: string;
  costPrice: number;
  nameProduct: string;
  retailPrice: number;
  amount: number;
  state: string;
}

const columns: ColumnsType<IImportTable> = [
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
const ImportTable = ({ dataTable = [], headerTable = "", ...props }: Props) => {
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

export default ImportTable;
