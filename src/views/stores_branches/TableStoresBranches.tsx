import React, { useEffect, useState } from "react";
import {
  Card,
  Form,
  Input,
  Select,
  Button,
  Pagination,
  PaginationProps,
} from "antd";
import type { ColumnsType } from "antd/es/table";
import {
  BeakerIcon,
  MagnifyingGlassIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/solid";
import { DashOutlined } from "@ant-design/icons";
import MoTable from "component/Table/MoTable";
type Props = {
  dataTable: DataType[]
  headerTable: string
  // callAPI: ()=>void
};

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}
const columns: ColumnsType<DataType> = [
  {
    title: "ชื่อร้าน",
    dataIndex: "name",
  },
  {
    title: "ชื่อนามสกุล(ผู้จัดการ)",
    dataIndex: "age",
  },
  {
    title: "เบอร์โทร",
    dataIndex: "address",
  },
  {
    title: "สถานะพัสดุ",
    dataIndex: "address",
  },
  {
    title: "จัดการ",
    dataIndex: "address",
    render: () => {
      return (
        <div className="flex">
          <PencilSquareIcon className="h-4 w-4 " />
          <DashOutlined />
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

const TableStoresBranches = ({ dataTable=[], headerTable='' }: Props) => {
  const [limitPage, setLimitPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    console.log('current',currentPage);
    console.log('limitPage',limitPage);
  }, [currentPage, limitPage]);

  const onChangePage = (page: number, type?: string) => {
    if (type === "pageSize") setLimitPage(page);
    else setCurrentPage(page);
  };
  return (
    <div>
      <div>
        <div className="my-6">{headerTable}</div>
        <div></div>
      </div>
      <MoTable
        columns={columns}
        dataSource={dataTable}
        rowSelection={rowSelection}
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

export default TableStoresBranches;
