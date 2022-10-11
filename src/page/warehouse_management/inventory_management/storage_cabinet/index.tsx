import { Button, Col, ConfigProvider, Form, Image, Input, Row } from "antd";
import SearchForm, { IsearchFormItem } from "component/Form/searchForm";
import CHeader from "component/headerPage/Header";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import CSelectStatus from "component/input/c-select-status";
import { ColumnsType } from "antd/lib/table";
import MoTable from "component/Table/MoTable";
import { IStoreCabinet, ISlot } from '../interface'
import WhilteButton from "component/Button/whilteButton";
import BlueButton from "component/Button/BlueButton";
import ColumnGroup from "antd/lib/table/ColumnGroup";
import CInput from "component/input/c-input";

const SpecialInput = (param:any) => {
  return (
    <div className="flex justify-center items-center bg-white w-[100px] h-[35px] border-2 border-gray rounded-[4px] ">
        <div className="grid grid-cols-2 ">
          <span className="grid justify-start items-center">฿</span>
          <span className="grid justify-end items-center">{param}</span>
        </div>
    </div>
  )
}


const StoreCabinet = () => {
  const [limitPage, setLimitPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  console.log('location',location.state);

  useEffect(() => {
    console.log("current", currentPage);
    console.log("limitPage", limitPage);
  }, [currentPage, limitPage]);

  const onChangePage = (page: number, type?: string) => {
    if (type === "pageSize") setLimitPage(page);
    else setCurrentPage(page);
  };

  const elements: IsearchFormItem[] = [
    {
      name: "SKU/Sub SKU",
      label: "SKU/Sub SKU",
      input: {
        type: "input",
        options: {
          search: true,
        },
      },
    },
    {
      name: "Name",
      label: "Name",
      input: {
        type: "input",
        options: {
          search: true,
        },
      },
    },
    {
      name: "Status",
      label: "Status",
      input: {
        type: "select",
        options: {
          values: [
            { key: 1, value: "เปิดการขาย", label: "เปิดการขาย" },
            {
              key: 2,
              value: "ปิดการขาย",
              label: "ปิดการขาย",
            },
          ],
          key: "stateProduct",
          label: "stateProduct",
        },
      },
    },
    {
      name: "Category/Sub Category",
      label: "Category/Sub Category",
      input: {
        type: "input",
        options: {
          search: true,
        },
      },
    },
    {
      name: "Lot",
      label: "Lot",
      input: {
        type: "input",
        options: {
          search: true,
        },
      },
    },
  ];

  const columns: ColumnsType<IStoreCabinet> = [
    {
      title: "SKU/Sub SKU",
      dataIndex: "sku",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Category/Sub Category",
      dataIndex: "category",
    },
    {
      title: "Lot",
      dataIndex: "lot",
    },
    {
      title: "Due Date",
      dataIndex: "dueDate",
    },
    {
      title: "Price Normal",
      dataIndex: "price",
      render: (price: number) => {
        return (
          <CInput.InputNumberR defaultValue={price}/>
        )
      },
    },
    {
      title: "QTY",
      dataIndex: "qty",
      render: (qty: number) => {
        return (
          <CInput.InputNumberR defaultValue={qty}/>
        );
      },
    },
    {
      title: "สถานะ",
      dataIndex: "status",
      render: (status) => {
        return (
          <CSelectStatus
            state={status}
            listOption={[
              { label: "ปิดการขาย", value: "ปิดการขาย" },
              { label: "เปิดการขาย", value: "เปิดการขาย" },
            ]}
            labelKey={"label"}
            valueKey={"value"}
            activeBackground={"#77C48B"}
            initialValue={status}
            activeValue={"เปิดการขาย"}
          />
        );
      },
    },
  ];

  const expandable = {
    expandedRowRender: (record: IStoreCabinet) => (
      <>
        <div className="flex space-x-5 justify-end">
          <WhilteButton width='100px' height="36px">{ `${t('cancle')}`}</WhilteButton>
          <BlueButton width='100px' height="36px">{ `${t('save')}`}</BlueButton>
        </div>
        <div>
          {
            record.slots.map((element:ISlot,index:number)=>{
              return (
                <div key={index} className="flex justify-end mt-3 space-x-4">
                  <div>
                    <div>{element.color}</div>
                    <div>code sku</div>
                  </div>  
                  <CInput.InputNumberR defaultValue={element.price}/>
                  <CInput.InputNumberR defaultValue={element.qty}/>
                </div>
              )
            })
          }
        </div>
      </>
    ),
    rowExpandable: (record: any) => record.name !== "Not Expandable",
  };
  
  
  const onFinish = (values: any) => {
    //โยนเข้า create query
    console.log("Received values of form: ", values);
  };
  return (
    <>
      <CHeader
        keyHeader="warehouseManagement"
        arrPath={["warehouseManagement", "locker "+ location.state.id]}
        buttons={[
          { 
            colorButton: 'green',
            keytext: 'addproductlist',
            fn:  () => {
                  navigate("/warehouse-management/create-store-cabinet", {state:{id: location.state.id }} );
            }
          }
        ]}
      />
      <SearchForm elements={elements} onFinish={onFinish} />
      <MoTable
        headerTable={`รายการสินค้า`}
        columns={columns}
        dataSource={data}
        expandable={expandable}
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
      </>
  );
};
export default StoreCabinet;

const data: IStoreCabinet[] = [
  {
    key: 1,
    name: "K8763",
    sku: "โซเดียมไบคาร์บอเนต",
    category: "เคมีภัณฑ์",
    lot: "19/09/2023",
    price: 399,
    dueDate: "10/09/2022",
    qty: 300,
    status: "เปิดการขาย",
    slots:[
      {color:"red", price: 399, qty: 150},
      {color:"yellow", price: 399, qty: 150},
    ]
  },
  {
    key: 2,
    name: "K8763",
    sku: "โซเดียมไบคาร์บอเนต",
    category: "เคมีภัณฑ์",
    lot: "19/09/2023",
    price: 399,
    dueDate: "10/09/2022",
    qty: 300,
    status: "ปิดการขาย",
    slots:[
      {color:"red", price: 399, qty: 150},
      {color:"yellow", price: 399, qty: 150},
    ]
  },
];