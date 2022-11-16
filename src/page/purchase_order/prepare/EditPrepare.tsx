import { DeleteFilled } from "@ant-design/icons";
import { Card, Divider, Row, Col, Form } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { ColumnsType } from "antd/lib/table";
import ContentContainer from "component/container/ContentContainer";
import PurchaseForm from "component/Form/purchaseForm";
import CHeader from "component/headerPage/Header";
import LabelPay from "component/Labels/LabelPay";
import MoTable from "component/Table/MoTable";
import _ from "lodash";
import moment from "moment";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CInput from "component/input/c-input";

interface TableType {
  index: number;
  sku: string;
  name: string;
  price: number;
  amount: number;
  unit: string;
  total: number;
}

const EditPrepare = () => {
  const [data, setData] = useState<any>();
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const deleteSelected = (index: number) => {
    let temp = data.filter((item: any) => item.index !== index);
    setData([...temp]);
  };

  const onChangeInputnumber = (value: any) => {
    console.log("value ::", value);
  };

  const expandable = {
    expandedRowRender: (record: any) => {
      return (
        <>
          {record.storage.map((item: any, index: number) => {
            return (
              <div key={index} className="h-[50px] pl-5">
                {item.text}
              </div>
            );
          })}
        </>
      );
    },
    // columnWidth:'2%'
  };

  const columns: ColumnsType<TableType> = [
    {
      title: "SKU",
      dataIndex: "sku",
      width: "10%",
    },
    {
      title: "ชื่อสินค้า",
      dataIndex: "name",
      width: "20%",
    },
    {
      title: "ราคา/หน่วย",
      dataIndex: "price",
      width: "10%",
      render: (price: number) => {
        return <span>{price.toFixed(2)}</span>;
      },
    },
    {
      title: "สต็อคคงเหลือ",
      dataIndex: "stock",
      width: "10%",
    },
    {
      title: "จำนวนที่ต้องการ",
      dataIndex: "amount",
      width: "10%",
      render: (value: number) => {
        return (
          <CInput.CInputNumberSytle value={value} prefix="" text_align="end" />
        );
      },
    },
    {
      title: "จำนวนที่แพ็คได้",
      dataIndex: "handle",
      width: "10%",
      render: (_: any, record: any) => {
        if (record.amount <= record.stock) {
          return (
            <CInput.CInputNumberSytle
              value={record.amount}
              prefix=""
              text_align="end"
              onChange={onChangeInputnumber}
            />
          );
        }
        if (record.amount > record.stock) {
          return (
            <CInput.CInputNumberSytle
              value={record.stock}
              className="!text-red-500"
              prefix=""
              text_align="end"
              onChange={onChangeInputnumber}
            />
          );
        }
      },
    },
    {
      title: "หน่วย",
      dataIndex: "unit",
      width: "8%",
    },
    {
      title: "ราคารวม (฿)",
      dataIndex: "pay",
      width: "10%",
      render: (_, record) => {
        return (
          <div className="flex justify-between">
            <div className="text-blue-700 font-bold">
              {(record.price * record.amount).toFixed(2)}
            </div>
            <DeleteFilled
              onClick={() => {
                deleteSelected(record.index);
              }}
            />
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    setData(_.cloneDeep(mock.products));
  }, []);

  return (
    <>
      <CHeader
        keyHeader="purchaseOrderManagement"
        arrPath={[
          "purchaseOrderManagement",
          "prepareGoods",
          "รายละเอียดใบเตรียมสินค้า",
        ]}
        buttons={[
          {
            colorButton: "whilte",
            keytext: "ยกเลิก",
            fn: () => {
              navigate("/purchase-order/manage");
            },
          },
          {
            colorButton: "blue",
            keytext: "เตรียมสำเร็จ",
            fn: () => {
              navigate("/purchase-order/successPrepare");
            },
          },
        ]}
      />
      <ContentContainer>
        <Card className="w-full">
          <div className="text-[#498DCB] text-[26px]">
            รายละเอียดใบสั่งซื้อ/เตรียมสินค้า
          </div>
          <Divider />
          <PurchaseForm
            refDisable={true}
            form={form}
            setValue={{
              codeOrder: "RESD5656",
              sendDate: moment("2022-10-02"),
              overtimeDate: moment("2022-10-11"),
              Description1: "ผู้ส่ง",
              Description2: "ผู้รับ",
            }}
          />
          <MoTable
            key="index"
            rowKey="index"
            headerTable="รายละเอียดสินค้า"
            columns={columns}
            dataSource={_.cloneDeep(data)}
            pagination={false}
            noMarginX={true}
            expandable={expandable}
          />
          <div className="mt-5">
            <Row>
              <Col sm={24} lg={12} className="!flex !items-end pb-6">
                <div className="w-full">
                  <div className="text-[20px] font-bold">หมายเหตุ</div>
                  <TextArea rows={4} readOnly={true} />
                </div>
              </Col>
              <LabelPay
                total={0}
                discount={0}
                totalWithoutDiscount={0}
                netPrice={0}
              />
            </Row>
          </div>
        </Card>
      </ContentContainer>
    </>
  );
};

export default EditPrepare;

const mock = {
  products: [
    {
      index: 1,
      sku: "DE-0001",
      name: "กรดพาราอะมิโนแบนโซอิก",
      price: 150,
      stock: 10,
      amount: 10,
      unit: "ชิ้น",
      storage: [
        { text: "ตู้จัดเก็บ A1 รหัสตู้ A 001236 10 ชิ้น" },
        { text: "ตู้จัดเก็บ A1 รหัสตู้ A 001236 10 ชิ้น" },
      ],
    },
    {
      index: 2,
      sku: "WE-0002",
      name: "กรดพาราอะมิโนแบนโซอิก",
      price: 250,
      stock: 20,
      amount: 30,
      unit: "ชิ้น",
      storage: [
        { text: "ตู้จัดเก็บ B1 รหัสตู้ B 001236 10 ชิ้น" },
        { text: "ตู้จัดเก็บ B1 รหัสตู้ B 001236 10 ชิ้น" },
      ],
    },
  ],
};
