import React, { useEffect, useState } from "react";
import MoTable from "component/Table/MoTable";
import type { ColumnsType } from "antd/es/table";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { DashOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import { Select } from "antd";
import CSelectTable from "component/input/c-select-table";
type Props = {
  data:any
  // render: (values?: any) => void;
};

interface DataType {
  index: number;
  date: string;
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

  // นำรายการสั่งซื้อนี้ มาทำรายการอีกที
  const orderAgain = ( value: string )=>{
    console.log('สั่งอีกครั้ง', value);
  }

  // รอเตรียมพัสดุ ---> nevigate ไปที่หน้าเตรียมพัสดุของรายการสั่งซื้อนี้
  const prepareOrder = ( value: string )=>{
    console.log('เตรียมพัสดุ', value);
  }

  //ตรวจสอบ อนุมัติ หรือ ยกเลิกใบสั่งซื้อ
  const check = (id:string)=>{
    console.log('ตรวจสอบใบสั่งซื้อที่ ID : ', id);
  }

  //??? รอส่งสินค้า
  const waitingDelivery = ()=>{
    console.log('??? รอส่งสินค้า');
  }


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
      title: "รวม(฿)",
      dataIndex: "pay",
    },
    {
      title: "สถานะ",
      dataIndex: "status",
      render: (text, record) => {
        switch(text) {
          case 'อนุมัติ':
            return <CSelectTable 
                      background="#77C48B" 
                      selection={
                        {leder:text, option:[
                          {label:'สั่งอีกครั้ง', value:record.code , action:orderAgain },
                          {label:'รอเตรียมพัสดุ', value:record.code , action:prepareOrder }
                        ]}}/>
          case 'รออนุมัติ':
            return <CSelectTable 
                      background="#4E8FCC" 
                      selection={{leder:text, option:[
                        {label:'รอตรวจสอบ',value:record.code, action:check },
                      ]}}/>
          case 'ยกเลิก':
              // return <CSelectTable background="red" selection={{leder:text, option:[]}} />
              return  <div className="w-[130px] h-[40px] bg-red-600 text-white rounded-[10px] flex justify-center items-center">ยกเลิก</div>
          case 'รอเตรียมสินค้า':
              // return <CSelectTable background="#4E8FCC" selection={{leder:text, option:[]}} />
              return <div className="w-[130px] h-[40px] bg-[#4E8FCC] text-white rounded-[10px] flex justify-center items-center">รอเตรียมสินค้า</div>
          case 'เตรียมสำเร็จ':
              return <CSelectTable 
                        background="#77C48B" 
                        selection={
                          {leder:text, option:[
                            {label:'รอส่งสินค้า', value:record.code , action:waitingDelivery },
                      ]}}/>
          case 'รอส่งสินค้า':
              // เปลี่ยนเป็น กล่องที่มีขนาดเท่ากันกับ select แทน
              // #949594
              return <div className="w-[130px] h-[40px] bg-[#949594] text-white rounded-[10px] flex justify-center items-center">รอส่งสินค้า</div>
          default:
            return null
        }
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
        dataSource={props.data}
        onChangePage={onChangePage}
        onRow={(record)=>({
          onDoubleClick: () => {
            if(record.status === 'อนุมัติ' || record.status === 'รออนุมัติ' )
              console.log(record)
            }
        })}
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

