import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { PaginationProps } from "antd";
import TableStoresBranches from "views/stores_branches/TableStoresBranches";
import SearchForm from "component/Form/searchForm";
import { IsearchFormItem } from "component/Form/searchForm";
import CHeader from "component/headerPage/Header";
import { useNavigate } from "react-router-dom";

const elements: IsearchFormItem[] = [
  {
    name: "store",
    label: "ชื่อร้าน",
    input: {
      type: "input",
      options: {
        search: true,
      },
    },
  },
  {
    name: "name",
    label: "ชื่อ-นามสกุล(ผู้จัดการ)",
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
  {
    name: "status",
    label: "การใช้งาน",
    input: {
      type: "select",
      options: {
        values: [
          { key: 1, value: "activs", label: "ใช้งาน" },
          {
            key: 2,
            value: "inactive",
            label: "ไม่มีการใช้งาน",
          },
        ],
        key: "stateProduct",
        label: "stateProduct",
      },
    },
  },
];

interface DataType {
  key: React.Key;
  store: string;
  name: string;
  phone: string;
  status: boolean;
}

const data: DataType[] = [];
for (let i = 0; i < 10; i++) {
  data.push({
    key: i,
    store: `ร้านขายยาวังทองหลาง`,
    name: `สมพงษ์ ตามังกร`,
    phone: "09123456789",
    status: true,
  });
}

const StoresBranches = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const connentlAPI = (values: any) => {
    console.log("connentl API");
    console.log("value", values);
  };

  const onShowSizeChange: PaginationProps["onShowSizeChange"] = (
    current,
    pageSize
  ) => {
    console.log(current, pageSize);
    connentlAPI("ads");
  };

  const onFinish = (values: any) => {
    //โยนเข้า create query
    console.log("Received values of form: ", values);
  };
  return (
    <div className="bg-bgcolor">
      <CHeader
        keyHeader="stores&branches"
        // nevigate={{
        //   keytext: "createShop",
        //   fn: () => {
        //     navigate("/craete-stores-branches");
        //   },
        // }}
        arrPath={["stores&branches"]}
        buttons={[
          { colorButton: 'green',
            keytext: 'createShop',
            fn:  () => {
              navigate("/craete-stores-branches");
            },
          }
        ]}
      />  
      <SearchForm elements={elements} onFinish={onFinish} />
      <TableStoresBranches dataTable={data} headerTable={t("orderlist")} />
      
    </div>
  );
};

export default StoresBranches;
