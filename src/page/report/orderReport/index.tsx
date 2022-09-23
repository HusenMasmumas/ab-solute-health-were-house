import SearchForm, { IsearchFormItem } from "component/Form/searchForm";
import CHeader from "component/headerPage/Header";
import { t } from "i18next";
import React from "react";
import OrderTable from "views/report/orderTable";

interface DataType {
  key: number;
  date: string;
  code: string;
  nameShop: string;
  fullname: string;
  tel: string;
  amount: string;
  state: string;
}

type Props = {};
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
    label: "เลขที่ใบสั่งซื้อ",
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
    name: "fullname",
    label: "ชื่อ-นามสกุล",
    input: {
      type: "input",
      options: {
        search: true,
      },
    },
  },
  {
    name: "tel",
    label: "เบอร์โทร",
    input: {
      type: "input",
      options: {
        search: true,
      },
    },
  },
  {
    name: "state",
    label: "สถานะ",
    input: {
      type: "select",
      options: {
        values: [
          { key: 1, value: "success", label: "เรียบร้อย" },
          { key: 2, value: "notsuccess", label: "ไม่เรียบร้อย" },
        ],
      },
    },
  },
];

const data: DataType[] = [
  {
    key: 1,
    date: "20/08/2565",
    code: "PO453671668",
    nameShop: "ร้านขายยาวังทองหลาง",
    fullname: "สมพงษ์ ตามังกร",
    amount: "300",
    tel: "0934213455",
    state: "เรียบร้อย",
  },
  {
    key: 2,
    date: "20/08/2565",
    code: "PO453671668",
    nameShop: "ร้านขายยากรุงเทพฯ",
    fullname: "อัญญา เบญจมินทร์",
    tel: "0934213455",
    amount: "300",
    state: "รออนุมัติ",
  },
  {
    key: 3,
    date: "20/08/2565",
    code: "PO453671668",
    nameShop: "ร้านขายยาแอ็บโซลูท เฮลธ์",
    fullname: "สมพงษ์ ตามังกร",
    amount: "300",
    tel: "0934213455",
    state: "เตรียมสินค้า",
  },
  {
    key: 4,
    date: "20/08/2565",
    code: "PO453671668",
    nameShop: "ร้านขายยาแอ็บโซลูท 2",
    fullname: "อัญญา เบญจมินทร์",
    tel: "0934213455",
    amount: "300",
    state: "ยกเลิก",
  },
];

const onFinish = (values: any) => {
  //โยนเข้า create query
  console.log("Received values of form: ", values);
};

const OrderReport = (props: Props) => {
  return (
    <div className="bg-bgcolor">
      <CHeader keyHeader="report" arrPath={["report", "orderReport"]} />
      <div>
        <SearchForm elements={elements} onFinish={onFinish} />
      </div>
      {/* Table */}
      <div className="mt-10 bg-white">
        <OrderTable dataTable={data} headerTable={t("orderReport")} />
      </div>
    </div>
  );
};

export default OrderReport;
