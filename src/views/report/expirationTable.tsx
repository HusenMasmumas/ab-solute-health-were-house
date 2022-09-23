import React, { useEffect, useState } from "react";
import type { ColumnsType } from "antd/es/table";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { DashOutlined } from "@ant-design/icons";
import MoTable from "component/Table/MoTable";
type Props = {
  dataTable: DataType[];
  headerTable: string;
  // callAPI: ()=>void
};

interface DataType {
  key: React.Key;
  code: string;
  sku: string;
  name: string;
  endDate: string;
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
    title: "รหัสสินค้า",
    dataIndex: "code",
    width: "16%",
  },
  {
    title: "SKU",
    dataIndex: "sku",
    width: "16%",
  },
  {
    title: "ชื่อสินค้า  ",
    dataIndex: "name",
    width: "16%",
  },
  {
    title: "วันหมดอายุ",
    dataIndex: "endDate",
    width: "16%",
  },
  {
    title: "จำนวน",
    dataIndex: "amount",
    width: "16%",
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

const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
};

const ExpirationTable = ({
  dataTable = [],
  headerTable = "",
  ...props
}: Props) => {
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

export default ExpirationTable;
