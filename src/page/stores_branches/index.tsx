import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Card, Form, Input, Select, Button, Table, Pagination, PaginationProps  } from "antd";
import {
  BeakerIcon,
  MagnifyingGlassIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/solid";
import type { ColumnsType } from "antd/es/table";
import type { TableRowSelection } from "antd/es/table/interface";
import { DashOutlined } from "@ant-design/icons";
import TableStoresBranches from "views/stores_branches/TableStoresBranches";
import SearchForm from "component/Form/searchForm";
import { IsearchFormItem } from "component/Form/searchForm";


const elements: IsearchFormItem[] = [
  {
    name: "วัน",
    label: "วัน",
    input: {
      type: "date-picker",
      options: {
        search: true,
      },
    },
  },
  {
    name: "ชื่อร้าน",
    label: "ชื่อร้าน",
    input: {
      type: "input",
      options: {
        search: true,
      },
    },
  },
  {
    name: 'ชื่อ-นามสกุล(ผู้จัดการ)',
    label: 'ชื่อ-นามสกุล(ผู้จัดการ)',
    input: {
      type: "input",
      options: {
        search: true,
      },
    },
  },
  {
    name: "เบอร์โทร",
    label: 'เบอร์โทร',
    input: {
      type: "input",
      options: {
        search: true,
      },
    },
  },
  {
    name: "สถานะพัสดุ",
    label: 'สถานะพัสดุ',
    input: {
      type: "select",
      options: {
        values: [
          {key:1, value:'จัดการใบสั่งซื้อ', label:'จัดการใบสั่งซื้อ'},
          {key:2, value:'จัดการพัสดุสินค้าตกค้าง', label:'จัดการพัสดุสินค้าตกค้าง'}
        ],
        key: 'stateProduct',
        label: 'stateProduct'
      },
    },
  },
]

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}


const data: DataType[] = [];
for (let i = 0; i < 20; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

const StoresBranches = () => {
  const { t } = useTranslation();

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const connentlAPI = (values:any)=>{
    console.log('connentl API');
    console.log('value',values);
  }

  const onShowSizeChange: PaginationProps['onShowSizeChange'] = (current, pageSize) => {
    console.log(current, pageSize);
    connentlAPI('ads')
  };

  const onFinish = (values: any) => {
    //โยนเข้า create query
    console.log("Received values of form: ", values);
  };
  return (
    <div className="bg-[#F5F5F5] m-0 p-0 ">
      <div className="flex ">
        <div className="w-52 ">
          <div className="text-3xl">{`${t("stores&branches")}`}</div>
          <div>{`${t("stores&branches")}`}</div>
        </div>
        <div className="grow"></div>
        <div className="w-52 h-5/5 justify-end flex items-center ">
          <Button className="!bg-[#77C48B] !text-lg !h-11 !rounded-md !border-[#77C48B] !text-white">
            สร้างร้าน&สาขา
          </Button>
        </div>
      </div>
      <div>
        <SearchForm elements={elements} onFinish={onFinish} />
      </div>
      {/* Table */}
      <div className="mt-10 bg-white">
        
        <TableStoresBranches dataTable={data} headerTable={'รายการสั่งซื้อ'}/>
      </div>
    </div>
  );
};

export default StoresBranches;
