import SearchForm, { IsearchFormItem } from "component/Form/searchForm";
import Table_1 from "./Table_1";
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

const Prepare = (props: Props) => {
  return (
    <>
      <SearchForm elements={elements} onFinish={onFinish} />
      <Table_1 data={mock} tableName="รายการเตรียมสินค้า"/>
    </>
  );
};

export default Prepare;


const mock = [
  {
    key: 1,
    date: "2022-08-11T07:30:00.207536",
    code: "PO456789",
    branch: "ร้านขายยาวังทองหลาง",
    fullname: "สมพงษ์ ตามังกร",
    phone: "0934213455",
    pay: "3000",
    status: "รอเตรียมสินค้า",
  },
  {
    key: 2,
    date: "2022-08-11T07:30:00.207536",
    code: "PO456787",
    branch: "ร้านขายยาวังทองหลาง",
    fullname: "สมพงษ์ ตามังกร",
    phone: "0934213455",
    pay: "3000",
    status: "เตรียมสำเร็จ",
  },
  {
    key: 3,
    date: "2022-08-11T07:30:00.207536",
    code: "PO456786",
    branch: "ร้านขายยาวังทองหลาง",
    fullname: "สมพงษ์ ตามังกร",
    phone: "0934213455",
    pay: "3000",
    status: "รอส่งสินค้า",
  },
];
