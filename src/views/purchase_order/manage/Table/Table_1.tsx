import React, { useEffect, useState } from "react";
import MoTable from "component/Table/MoTable";
import type { ColumnsType } from "antd/es/table";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { DashOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import { Select } from "antd";
import CSelectTable from "component/input/c-select-table";
type Props = {};

interface DataType {
  index: number;
  data: string;
  code: string;
  fullname: string;
  phone: string;
  status: "approve" | "waiting" | "cancle";
}

const Table_1 = (props: Props) => {
  const [limitPage, setLimitPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);
  
  useEffect(() => {
    console.log("current", currentPage);
    console.log("limitPage", limitPage);
  }, [currentPage, limitPage]);


  const columns: ColumnsType<DataType> = [
    {
      title: "#",
      dataIndex: "index",
    },
    {
      title: "วันที่สั่งซื้อ",
      dataIndex: "date",
      render: (text, record) => {
        return <span>{dayjs(text).format("DD/MM/YYYY | HH.mm")}</span>;
      },
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
      
      // <CSelectTable state={text} />
      render: (text) => {
        switch(text) {
          case 'อนุมัติ' || 'รอเตรียมพัสดุ':
            return <CSelectTable state={text} background="#77C48B"/>
          case 'รออนุมัติ':
            return <CSelectTable state={text} background="#4E8FCC"/>
          case 'ยกเลิก':
              return <CSelectTable state={text} background="red"/>
          default:
            return null
        }
      },
    },
    {
      title: "จัดการ",
      dataIndex: "status",
      render: () => {
        return (
          <div className="flex space-x-4 ">
            <PencilSquareIcon className="!w-6" />
            <DashOutlined className="!w-6 text-2xl" />
          </div>
        );
      },
    },
  ];

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
      />
    </div>
  );
};

export default Table_1;

const mock = [
  {
    index: 1,
    key:1,
    date: "2022-08-11T07:30:00.207536",
    code: "P03558721",
    branch: "ร้านขายยาวังทองหลาง",
    fullname: "สมพงษ์ ตามังกร",
    phone: "0934213455",
    pay: "3000",
    status: "อนุมัติ",
  },
  {
    index: 2,
    key:2,
    date: "2022-08-11T09:30:00.207536",
    code: "P0358991",
    branch: "ร้านขายยาวังทองหลาง",
    fullname: "อัญญา เบญจมินทร์",
    phone: "0934213455",
    pay: "3000",
    status: "รออนุมัติ",
  },
  {
    index: 3,
    key:3,
    date: "2022-08-11T10:30:00.207536",
    code: "P01346688",
    branch: "ร้านขายยาวังทองหลาง",
    fullname: "ชาลิสา กฤษณ์",
    phone: "0934213455",
    pay: "3000",
    status: "ยกเลิก",
  },
];
