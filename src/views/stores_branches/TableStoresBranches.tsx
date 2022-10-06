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
  store: string;
  name: string;
  phone: string;
  status: boolean;
}

const columns: ColumnsType<DataType> = [
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

const onChange = (checked: boolean) => {
  console.log(`switch to ${checked}`);
};

const TableStoresBranches = ({ dataTable = [], headerTable = "" }: Props) => {
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
      />
  );
};

export default TableStoresBranches;
