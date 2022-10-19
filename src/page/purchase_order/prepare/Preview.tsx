import { DeleteFilled } from "@ant-design/icons";
import {
  Card,
  Col,
  ConfigProvider,
  Divider,
  Form,
  InputNumber,
  Row,
} from "antd";
import form from "antd/lib/form";
import TextArea from "antd/lib/input/TextArea";
import { ColumnsType } from "antd/lib/table";
import ContentContainer from "component/container/ContentContainer";
import PurchaseForm from "component/Form/purchaseForm";
import CHeader, { IButton } from "component/headerPage/Header";
import CInput from "component/input/c-input";
import MoTable from "component/Table/MoTable";
import _ from "lodash";
import moment from "moment";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LabelPay from "component/Labels/LabelPay";
type Props = {};

interface TableType {
  index: number;
  sku: string;
  name: string;
  price: number;
  amount: number;
  unit: string;
  total: number;
}

const Preview = (props: Props) => {
  const [selectIndex, setSelectIndex] = useState<number[]>([]);
  const [idOrder, setIdOrder] = useState<any>();
  const navigate = useNavigate();
  let location = useLocation();
  let [form] = Form.useForm();
  const deleteSelected = (index: number) => {
    console.log("index", index);
    let indexArr = selectIndex.filter((item: number) => item !== index);
    console.log("indexArr", indexArr);
    setSelectIndex([...indexArr]);
  };

  const columns: ColumnsType<TableType> = [
    {
      title: "#",
      dataIndex: "index",
    },
    {
      title: "SKU",
      dataIndex: "sku",
    },
    {
      title: "ชื่อสินค้า",
      dataIndex: "name",
    },
    {
      title: "ราคา/หน่วย",
      dataIndex: "price",
      render: (price: number) => {
        return <span>{price.toFixed(2)}</span>;
      },
    },
    {
      title: "สต็อคคงเหลือ",
      dataIndex: "stock",
    },
    {
      title: "จำนวนที่ต้องการ",
      dataIndex: "amount",
    },
    {
      title: "จำนวนที่แพ็คได้",
      dataIndex: "handle",
      render: (_: any, record: any) => {
        if (record.amount <= record.stock) {
          return <span>{record.amount}</span>;
        }
        if (record.amount > record.stock) {
          return <span className="text-red-400">{record.stock}</span>;
        }
      },
    },
    {
      title: "หน่วย",
      dataIndex: "unit",
    },
    {
      title: "ราคารวม (฿)",
      dataIndex: "pay",
      render: (_, record) => {
        return (
          <div className="">
            <span className="text-blue-700 font-bold">
              {(record.price * record.amount).toFixed(2)}
            </span>
            {/* <DeleteFilled onClick={()=>{
              console.log('record',record);
              deleteSelected(record.index)
            }} /> */}
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    setIdOrder(location.state.id);
  }, []);

  return (
    <>
      <CHeader
        keyHeader="purchaseOrderManagement"
        arrPath={[
          "purchaseOrderManagement",
          "prepareGoods",
          "รายละเอียดใบสั่งซื้อ",
          "เตรียมสินค้า-->ID::" + idOrder,
        ]}
        buttons={[
          {
            colorButton: "print",
            keytext: "เตรียมสินค้า",
            fn: () => {
              console.log("print");
            },
          },
          {
            colorButton: "blue",
            keytext: "เตรียมสินค้า",
            fn: () => {
              navigate("/purchase-order/editPrepare");
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
            AllreadOnly={true}
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
            dataSource={_.cloneDeep(mock.products)}
            pagination={false}
            noMarginX={true}
          />
          <div className="mt-5">
            <Row>
              <Col sm={24} lg={12} className="!flex !items-end pb-6">
                <div className="w-full">
                  <div className="text-[20px] font-bold">หมายเหตุ</div>
                  <TextArea rows={4} />
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

export default Preview;

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
        { text: "ตู้จัดเก็บ A1 รหัสตู้ A 001236" },
        { text: "ตู้จัดเก็บ A1 รหัสตู้ A 001236" },
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
        { text: "ตู้จัดเก็บ B1 รหัสตู้ B 001236" },
        { text: "ตู้จัดเก็บ B1 รหัสตู้ B 001236" },
      ],
    },
  ],
};
