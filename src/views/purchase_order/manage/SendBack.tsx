import React from "react";
import SearchForm, { IsearchFormItem } from "component/Form/searchForm";
import Table_2 from "./Table/Table_2";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { DashOutlined } from "@ant-design/icons";
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

const onFinish = (values: any) => {
  //โยนเข้า create query
  console.log("Received values of form: ", values);
};
const SendBack = (props: Props) => {
  return (
    <div>
      <SearchForm elements={elements} onFinish={onFinish} />
      <Table_2
        render={() => {
          return (
            <div className="flex space-x-4 ">
              <PencilSquareIcon className="!w-6" />
              <DashOutlined className="!w-6 text-2xl" />
            </div>
          );
        }}
        data={mock}
      />
    </div>
  );
};

export default SendBack;


const mock = [
  {
    key: 1,
    date: "23-02-2564",
    code: "asdsad",
    branch: "ร้านขายยาวังทองหลาง",
    fullname: "สมพงษ์ ตามังกร",
    phone: "0934213455",
    pay: "3000",
    status: "ยกเลิก",
  },
  {
    key: 2,
    date: "23-02-2569",
    code: "asdsad",
    branch: "ร้านขายยาวังทองหลาง",
    fullname: "สมพงษ์ ตามังกร",
    phone: "0934213455",
    pay: "3000",
    status: "อนุมัติ",
  },
  {
    key: 3,
    date: "24-02-2569",
    code: "asdsad",
    branch: "ร้านขายยาวังทองหลาง",
    fullname: "สมพงษ์ ตามังกร",
    phone: "0934213455",
    pay: "3000",
    status: "อนุมัติ",
  },
];
