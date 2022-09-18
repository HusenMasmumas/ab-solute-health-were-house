import React, { useEffect, useState } from "react";
import type { ColumnsType } from "antd/es/table";
import MoTable from "component/Table/MoTable";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { DashOutlined } from "@ant-design/icons";
type Props = {
  render: (text:any, record:any, index:number) => React.ReactNode;
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
      title: "วันที่สั่งซื้อ",
      dataIndex: "date",
    },
    {
      title: "เลขที่ใบสั่งซื้อ",
      dataIndex: "code",
    },
    {
      title: "ชื่อสาขา",
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
      title: "รวม(บาท)",
      dataIndex: "pay",
    },
    {
      title: "สถานะ",
      dataIndex: "status",
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
        dataSource={mock}
        onChangePage={onChangePage}
        config={{
          total: 20, //ค่าจาก backend ใช้หารหน้า
          pageSize: limitPage,
          currentPage: currentPage,
        }}
        rowSelection={{
          ...rowSelection,
          columnTitle: <span>#</span>
        }}
      />
    </div>
  );
};

export default Table_2;

const mock = [
  {
    key: 1,
    date: "23-02-2564",
    code: "asdsad",
    branch: "ร้านขายยาวังทองหลาง",
    fullname: "สมพงษ์ ตามังกร",
    phone: "0934213455",
    pay: "3000",
    status: "อนุมัติ",
  },
  {
    key: 2,
    date: "23-02-2569",
    code: "asdsad",
    branch: "ร้านขายยาวังทองหลาง",
    fullname: "สมพงษ์ ตามังกร",
    phone: "0934213455",
    pay: "3000",
    status: "อนุมัติ",
  },
  {
    key: 3,
    date: "24-02-2569",
    code: "asdsad",
    branch: "ร้านขายยาวังทองหลาง",
    fullname: "สมพงษ์ ตามังกร",
    phone: "0934213455",
    pay: "3000",
    status: "อนุมัติ",
  },
];
