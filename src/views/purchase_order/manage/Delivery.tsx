import SearchForm, { IsearchFormItem } from "component/Form/searchForm";
import Table_1 from "./Table/Table_1";
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
      <Table_1 data={mock} tableName="รายการจัดส่งสินค้า"/>
    </div>
  );
};

export default Delivery;


const mock = [
  {
    key: 1,
    date: "2022-08-11T07:30:00.207536",
    code: "asdsad",
    branch: "ร้านขายยาวังทองหลาง",
    fullname: "สมพงษ์ ตามังกร",
    phone: "0934213455",
    pay: "3000",
    status: "อยู่ระหว่างขนส่ง",
  },
  {
    key: 2,
    date: "2022-08-11T07:30:00.207536",
    code: "asdsad",
    branch: "ร้านขายยาวังทองหลาง",
    fullname: "สมพงษ์ ตามังกร",
    phone: "0934213455",
    pay: "3000",
    status: "สำเร็จ",
  },
  {
    key: 3,
    date: "2022-08-11T07:30:00.207536",
    code: "asdsad",
    branch: "ร้านขายยาวังทองหลาง",
    fullname: "สมพงษ์ ตามังกร",
    phone: "0934213455",
    pay: "3000",
    status: "อยู่ระหว่างขนส่ง",
  },
  {
    key: 4,
    date: "2022-08-11T07:30:00.207536",
    code: "asdsad",
    branch: "ร้านขายยาวังทองหลาง",
    fullname: "สมพงษ์ ตามังกร",
    phone: "0934213455",
    pay: "3000",
    status: "รอการจัดส่ง",
  },
];
