import { Button, Col, Form, Image, Input, Row } from "antd";
import SearchForm, { IsearchFormItem } from "component/Form/searchForm";
import CHeader from "component/headerPage/Header";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import CSelectStatus from "component/input/c-select-status";
import { ColumnsType } from "antd/lib/table";
import MoTable from "component/Table/MoTable";
import { IStoreCabinet } from '../interface'

const expandable = {
  expandedRowRender: (record: any) => (
    <div className="py-[12px] px-[65px]">
      <div className="flex justify-end items-center gap-2">
        <Button className="!py-0 !rounded-[4px] !w-[80px] !text-[16px]">
          ยกเลิก
        </Button>
        <Button className="!py-0 !bg-lightblue !text-white !rounded-[4px] !w-[80px] !text-[16px]">
          บันทึก
        </Button>
      </div>
      <div className="grid grid-cols-3 px-[200px]">
        <div className="col-span-2 flex text-[16px] justify-center pl-[500px]">
          สีแดง
        </div>
        <div className=" flex justify-center items-center ">
          <Form>
            <Row gutter={[12, 0]}>
              <Col xl={12}>
                <Form.Item>
                  <Input className="table-expend" />
                </Form.Item>
              </Col>
              <Col xl={12}>
                <Form.Item>
                  <Input className="table-expend" />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
      <div className="grid grid-cols-3 px-[200px]">
        <div className="col-span-2 flex text-[16px] justify-center pl-[500px]">
          สีเหลือง
        </div>
        <div className=" flex justify-center items-center ">
          <Form>
            <Row gutter={[12, 0]}>
              <Col xl={12}>
                <Form.Item>
                  <Input className="table-expend" />
                </Form.Item>
              </Col>
              <Col xl={12}>
                <Form.Item>
                  <Input className="table-expend" />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </div>
  ),
  rowExpandable: (record: any) => record.name !== "Not Expandable",
};

const StoreCabinet = () => {
  const [limitPage, setLimitPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);
  
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
      render: (price: string) => {
        return (
          <div className="flex justify-center items-center bg-white w-[100px] h-[35px] border-2 border-gray rounded-[4px] ">
            <div className="grid grid-cols-2">
              <span className="grid justify-start items-center">฿</span>
              <span className="grid justify-end items-center">{price}</span>
            </div>
          </div>
        );
      },
    },
    {
      title: "QTY",
      dataIndex: "qty",
      render: (qty: string) => {
        return (
          <div className="flex justify-center items-center bg-white w-[100px] h-[35px] border-2 border-gray rounded-[4px]">
            <div className="grid grid-cols-2">
              <span className="">{qty}</span>
            </div>
          </div>
        );
      },
    },
    {
      title: "สถานะ",
      dataIndex: "status",
      render: (status, row) => {
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
  
  const onFinish = (values: any) => {
    //โยนเข้า create query
    console.log("Received values of form: ", values);
  };
  return (
    <>
      <CHeader
        keyHeader="warehouseManagement"
        arrPath={["warehouseManagement", "locker "+location.state.id]}
        buttons={[
          { 
            colorButton: 'green',
            keytext: 'addproductlist',
            fn:  () => {
                  navigate("/warehouse-management/create-store-cabinet");
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
    price: "399",
    dueDate: "10/09/2022",
    qty: "300",
    status: "เปิดการขาย",
  },
  {
    key: 2,
    name: "K8763",
    sku: "โซเดียมไบคาร์บอเนต",
    category: "เคมีภัณฑ์",
    lot: "19/09/2023",
    price: "399",
    dueDate: "10/09/2022",
    qty: "300",
    status: "ปิดการขาย",
  },
];