import Table_1 from "../Table_1";

const Delivery = () => {
  return (
    <>
      <Table_1 data={mock} tableName="รายการจัดส่งสินค้า"/>
    </>
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
