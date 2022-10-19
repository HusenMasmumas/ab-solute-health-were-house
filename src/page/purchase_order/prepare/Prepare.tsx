import Table_1 from "../Table_1";

const Prepare = () => {
  return (
      <Table_1 data={mock} tableName="รายการเตรียมสินค้า"/>
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
