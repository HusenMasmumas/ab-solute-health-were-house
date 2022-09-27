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
const Delivery = (props: Props) => {
  return (
    <div>
      <SearchForm elements={elements} onFinish={onFinish} />
      <Table_2
        render={(state:string) => {
          return (
            <div className="text-white">
              {state === "สำเร็จ" ? (
                <div className="bg-green rounded-[4px] w-[130px] flex justify-center py-[4px]">
                  {state}
                </div>
              ) : state === "อยู่ระหว่างขนส่ง" ? (
                <div className="bg-darkgray rounded-[4px] w-[130px] flex justify-center py-[4px]">
                  {state}
                </div>
              ) : state === "รอการจัดส่ง" ? (
                <div className="bg-lightblue rounded-[4px] w-[130px] flex justify-center py-[4px]">
                  {state}
                </div>
              ) : state === "ยกเลิก" ? (
                <div className="bg-[#FC0002] rounded-[4px] w-[130px] flex justify-center py-[4px]">
                  {state}
                </div>
              ) : null}
            </div>
          );
        }}
        data={mock}
      />
    </div>
  );
};

export default Delivery;


const mock = [
  {
    key: 1,
    date: "23-02-2564",
    code: "asdsad",
    branch: "ร้านขายยาวังทองหลาง",
    fullname: "สมพงษ์ ตามังกร",
    phone: "0934213455",
    pay: "3000",
    status: "อยู่ระหว่างขนส่ง",
  },
  {
    key: 2,
    date: "23-02-2569",
    code: "asdsad",
    branch: "ร้านขายยาวังทองหลาง",
    fullname: "สมพงษ์ ตามังกร",
    phone: "0934213455",
    pay: "3000",
    status: "สำเร็จ",
  },
  {
    key: 3,
    date: "24-02-2569",
    code: "asdsad",
    branch: "ร้านขายยาวังทองหลาง",
    fullname: "สมพงษ์ ตามังกร",
    phone: "0934213455",
    pay: "3000",
    status: "อยู่ระหว่างขนส่ง",
  },
  {
    key: 4,
    date: "24-02-2569",
    code: "asdsad",
    branch: "ร้านขายยาวังทองหลาง",
    fullname: "สมพงษ์ ตามังกร",
    phone: "0934213455",
    pay: "3000",
    status: "รอการจัดส่ง",
  },
];
