import React, { useEffect, useState } from "react";
import type { ColumnsType } from "antd/es/table";
import MoTable from "component/Table/MoTable";
type Props = {
  dataTable: DataType[];
  headerTable: string;
  // callAPI: ()=>void
};

interface DataType {
  key: React.Key;
  date: string;
  code: string;
  sku: string;
  name: string;
  amount: number;
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

const DamageTable = ({ dataTable = [], headerTable = "", ...props }: Props) => {
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
        actions={[{
          type: 'excel',
          fn: ()=>{console.log('download excel');
          }
        }]}
      />
  );
};

export default DamageTable;
