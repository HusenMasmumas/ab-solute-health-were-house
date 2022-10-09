import { useEffect, useState } from "react";
import SearchForm, { IsearchFormItem } from "component/Form/searchForm";
import CHeader from "component/headerPage/Header";
import { t } from "i18next";
import DamageTable from "views/report/damageTable";
import { DataType } from './interface'


const onFinish = (values: any) => {
  //โยนเข้า create query
  console.log("Received values of form: ", values);
};
const DamageReport = () => {
  const [limitPage, setLimitPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    console.log("current", currentPage);
    console.log("limitPage", limitPage);
  }, [currentPage, limitPage]);

  const onChangePage = (page: number, type?: string) => {
    if (type === "pageSize") setLimitPage(page);
    else setCurrentPage(page);
  };
  return (
    <>
      <CHeader keyHeader="report" arrPath={["report", "damageReport"]} />
      <SearchForm elements={elements} onFinish={onFinish} />
      <DamageTable dataTable={data} headerTable={t("damageReport")} />
    </>
  );
};

export default DamageReport;


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
    label: "รหัสสินค้า",
    input: {
      type: "input",
      options: {
        search: true,
      },
    },
  },
  {
    name: "SKU",
    label: "SKU",
    input: {
      type: "input",
      options: {
        search: true,
      },
    },
  },
  {
    name: "name",
    label: "ชื่อสินค้า",
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
          { key: 1, value: "notDamage", label: "ไม่เสียหาย" },
          { key: 2, value: "damage", label: "เสียหาย" },
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
    sku: "S1234556",
    name: "สมพงษ์ ตามังกร",
    amount: 100,
    state: "ไม่เสียหาย",
  },
  {
    key: 2,
    date: "20/08/2565",
    code: "PO453671668",
    sku: "S1234556",
    name: "อัญญา เบญจมินทร์",
    amount: 100,
    state: "เสียหาย",
  },
];