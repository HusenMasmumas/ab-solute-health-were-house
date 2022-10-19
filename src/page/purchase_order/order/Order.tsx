import { useEffect, useState } from "react";
import MoTable from "component/Table/MoTable";
import type { ColumnsType } from "antd/es/table";
import dayjs from "dayjs";
import CDropDown from "component/Dropdown/DropDown";
import { useNavigate } from "react-router-dom";
import SearchForm, { IsearchFormItem } from "component/Form/searchForm";

interface DataType {
  index: number;
  date: string;
  code: string;
  fullname: string;
  phone: string;
  status: "approve" | "waiting" | "cancle";
}

const elements: IsearchFormItem[] = [
  {
    name: "date",
    label: "วัน",
    input: {
      type: "date-picker",
      options: {
        search: true,
      },
    },
  },
  {
    name: "code",
    label: "เลขใบสั่งซื้อ",
    input: {
      type: "input",
      options: {
        search: true,
      },
    },
  },
  {
    name: "nameShop",
    label: "ชื่อร้าน",
    input: {
      type: "input",
      options: {
        search: true,
      },
    },
  },
  {
    name: "fullName",
    label: "ชื่อ-นามสกุล",
    input: {
      type: "input",
      options: {
        search: true,
      },
    },
  },
  {
    name: "phone",
    label: "เบอร์โทร",
    input: {
      type: "input",
      options: {
        search: true,
      },
    },
  },
];
const Order = () => {
  const [limitPage, setLimitPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const navigate = useNavigate();
  const tableName = 'รายการใบสั่งซื้อ'
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

  const goToDraft = (value:string)=>{
    console.log(value); 
    navigate("/purchase-order/create", {state:{id: value }});
  }

  const columns: ColumnsType<DataType> = [
    {
      title: "#",
      dataIndex: "key",
      width: '5%'
    },
    {
      title: "วันที่สั่งซื้อ",
      dataIndex: "date",
      render: (text, record) => {
        return <span>{dayjs(text).format("DD/MM/YYYY | HH.mm")}</span>;
      },
      width: '10%'
    },
    {
      title: "เลขที่ใบสั่งซื้อ",
      dataIndex: "code",
      width: '10%'
    },
    {
      title: "ชื่อสาขา",
      dataIndex: "branch",
      width: '10%'
    },
    {
      title: "ชื่อ-นามสกุล",
      dataIndex: "fullname",
      width: '10%'
    },
    {
      title: "เบอร์โทร",
      dataIndex: "phone",
      width: '10%'
    },
    {
      title: "รวม(฿)",
      dataIndex: "pay",
      width: '10%'
    },
    {
      title: "สถานะ",
      dataIndex: "status",
      width: '20%',
      render: (text:string,record) => {
        switch(text) {
          case 'อนุมัติ':
            return <CDropDown 
                      background="#77C48B" 
                      hoverbackground="#5F9C6F"
                      selection={
                        {title:text, option:[
                          {label:'สั่งอีกครั้ง', value:record.code , action:orderAgain },
                          {label:'รอเตรียมพัสดุ', value:record.code , action:prepareOrder }
                        ]}}/>
          case 'รออนุมัติ':
            return <CDropDown 
                      background="#4E8FCC" 
                      hoverbackground="#36648E" 
                      selection={{title:text, option:[
                        {label:'รอตรวจสอบ',value:record.code, action:check },
                      ]}}
                      />
          case 'ยกเลิก':
              return <CDropDown 
                        background="#FC0002" 
                        selection={{title:text, option:[]}}/>
          case 'สำเร็จ':
              return <CDropDown 
                        background="#77C48B" 
                        hoverbackground="bg-blue-500" 
                        selection={{title:text, option:[]}}/>
          case 'แบบร่าง':
            return <CDropDown 
                      background="#4E8FCC" 
                      hoverbackground="#36648E" 
                      selection={{title:text, option:[
                        {label:'รอตรวจสอบ',value:record.code, action:goToDraft },
                      ]}}
                      />          
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

  const onFinish = (values: any) => {
    //โยนเข้า create query
    console.log("Received values of form: ", values);
  };
  return (
    <>
      <SearchForm elements={elements} onFinish={onFinish} />
      <MoTable
        scroll={{x:900}}
        headerTable={tableName}
        columns={columns}
        dataSource={mock}
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
  </>
  )
}

export default Order


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
  {
    index: 4,
    key:4,
    date: "2022-08-11T10:30:00.207536",
    code: "P01346688",
    branch: "ร้านขายยาวังทองหลาง",
    fullname: "ชาลิสา กฤษณ์",
    phone: "0934213455",
    pay: "3000",
    status: "แบบร่าง",
  },
];