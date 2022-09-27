import React, { useEffect, useState } from "react";
import type { ColumnsType } from "antd/es/table";
import MoTable from "component/Table/MoTable";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { DashOutlined } from "@ant-design/icons";
type Props = {
  render: (text:any, record:any, index:number) => React.ReactNode;
  data:any
};

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}


const rowSelection = {
  onChange: (selectedRowKeys:any, selectedRows :any) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
};

const Table_2 = (props: Props) => {
  const [limitPage, setLimitPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const columns: ColumnsType<DataType> = [
    {
      title: "#",
      dataIndex: 'key'
    },
    {
      title: "วันที่สั่งซื้อ",
      dataIndex: "date",
    },
    {
      title: "เลขที่ใบสั่งซื้อ",
      dataIndex: "code",
    },
    {
      title: "ชื่อสาขา/ร้าน",
      dataIndex: "branch",
    },
    {
      title: "ชื่อ-นามสกุล",
      dataIndex: "fullname",
    },
    {
      title: "เบอร์โทร",
      dataIndex: "phone",
    },
    {
      title: "รวม (฿)",
      dataIndex: "pay",
    },
    {
      title: "จัดการ",
      dataIndex: "status",
      render: props.render
    },
  ];

  useEffect(() => {
    console.log('current',currentPage);
    console.log('limitPage',limitPage);
  }, [currentPage, limitPage]);

  const onChangePage = (page: number, type?: string) => {
    if (type === "pageSize") setLimitPage(page);
    else setCurrentPage(page);
  };
  return (
    <div className="mt-10 bg-white">
      <MoTable
        columns={columns}
        dataSource={props.data}
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

export default Table_2;