import React, { useEffect, useState } from "react";
import MoTable from "component/Table/MoTable";
import type { ColumnsType } from "antd/es/table";
import dayjs from "dayjs";
import { Card } from "antd";
import CDropDown from "component/Dropdown/DropDown";
import { useNavigate } from "react-router-dom";
type Props = {
  data:any
  tableName:string
};

interface DataType {
  index: number;
  date: string;
  code: string;
  fullname: string;
  phone: string;
  status: "approve" | "waiting" | "cancle";
}

const Table_1 = ({tableName, data}: Props) => {
  const [limitPage, setLimitPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const navigate = useNavigate();
  useEffect(() => {
    // console.log("current", currentPage);
    // console.log("limitPage", limitPage);
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
    navigate("/purchase-order/examine");
  }

  //??? รอส่งสินค้า
  const waitingDelivery = ()=>{
    console.log('??? รอส่งสินค้า');
  }


  const columns: ColumnsType<DataType> = [
    {
      title: "#",
      dataIndex: "key",
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
        switch(true) {
          case text === 'อนุมัติ' && ['รายการใบสั่งซื้อ'].includes(tableName):
            return <CDropDown 
                      background="#77C48B" 
                      hoverBackground="#5F9C6F"
                      selection={
                        {title:text, option:[
                          {label:'สั่งอีกครั้ง', value:record.code , action:orderAgain },
                          {label:'รอเตรียมพัสดุ', value:record.code , action:prepareOrder }
                        ]}}/>
          case text === 'อนุมัติ' && ['รายการการตีกลับ'].includes(tableName):
            return <CDropDown 
                      background="#77C48B" 
                      hoverBackground="#5F9C6F" 
                      selection={
                        {title:text, option:[
                          {label:'สั่งอีกครั้ง', value:record.code , action:orderAgain },
                        ]}}/>
          case text ==='รออนุมัติ':
            return <CDropDown 
                      background="#4E8FCC" 
                      hoverBackground="#36648E" 
                      selection={{title:text, option:[
                        {label:'รอตรวจสอบ',value:record.code, action:check },
                      ]}}
                      />
          case text ==='ยกเลิก':
              return <CDropDown 
                        background="#FC0002" 
                        selection={{title:text, option:[]}}/>
          case ['รอเตรียมสินค้า', 'รอการจัดส่ง'].includes(text):
              return <CDropDown 
                        background="#4E8FCC" 
                        selection={{title:text, option:[]}}/> 
          case ['เตรียมสำเร็จ'].includes(text):
              return <CDropDown 
                        background="#77C48B"
                        hoverBackground="#5F9C6F" 
                        selection={
                          {title:text, option:[
                            {label:'รอส่งสินค้า', value:record.code , action:waitingDelivery },
                      ]}}/>
          case ['รอส่งสินค้า', 'อยู่ระหว่างขนส่ง'].includes(text):
              return <CDropDown 
                        background="#949594" 
                        hoverBackground="bg-blue-500" 
                        selection={{title:text, option:[]}}/>
          case ['สำเร็จ'].includes(text):
              return <CDropDown 
                        background="#77C48B" 
                        hoverBackground="bg-blue-500" 
                        selection={{title:text, option:[]}}/>
                      
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
      <MoTable
        headerTable={tableName}
        columns={columns}
        dataSource={data}
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
        actions={[{
          type: 'excel',
          fn: ()=>{console.log('download excel');
          }
        }]}
      />
  );
};

export default Table_1;

