import SearchForm, { IsearchFormItem } from "component/Form/searchForm";
import CHeader from "component/headerPage/Header";
import { t } from "i18next";
import React from "react";
import ImportTable from "views/report/importTable";

type Props = {};
interface IImportTable {
  key: React.Key;
  date: string;
  code: string;
  sku: string;
  costPrice: number;
  nameProduct: string;
  retailPrice: number;
  amount: number;
  state: string;
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
const data: IImportTable[] = [
  {
    key: 1,
    code: "PO453671668",
    date: "20/08/2565",
    costPrice: 200,
    nameProduct: "คลอเฟนิรามีน",
    retailPrice: 500,
    sku: "S1234556",
    amount: 100,
    state: "เปิดการขาย",
  },
  {
    key: 2,
    code: "PO453671668",
    date: "20/08/2565",
    costPrice: 400.0,
    nameProduct: "กรดพาราอะมิโนเบนโซอิก",
    retailPrice: 500.0,
    sku: "S1234556",
    amount: 100,
    state: "ปิดการขาย",
  },
];

const onFinish = (values: any) => {
  //โยนเข้า create query
  console.log("Received values of form: ", values);
};

const ImportedReport = (props: Props) => {
  return (
    <div className="bg-[#F5F5F5] m-0 p-0 ">
      <CHeader keyHeader="report" arrPath={["report", "importedReport"]} />
      <div>
        <SearchForm elements={elements} onFinish={onFinish} />
      </div>
      {/* Table */}
      <div className="mt-10 bg-white">
        <ImportTable dataTable={data} headerTable={t("importedReport")} />
      </div>
    </div>
  );
};

export default ImportedReport;
