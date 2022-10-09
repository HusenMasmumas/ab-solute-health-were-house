import Table_1 from "../Table_1";

const SendBack = () => {
  return (
    <>
      <Table_1 data={mock} tableName="รายการการตีกลับ"/>
    </>
  );
};

export default SendBack;

const mock = [
  {
    key: 1,
    date: "2022-08-11T07:30:00.207536",
    code: "asdsad",
    branch: "ร้านขายยาวังทองหลาง",
    fullname: "สมพงษ์ ตามังกร",
    phone: "0934213455",
    pay: "3000",
    status: "ยกเลิก",
  },
  {
    key: 2,
    date: "2022-08-11T07:30:00.207536",
    code: "asdsad",
    branch: "ร้านขายยาวังทองหลาง",
    fullname: "สมพงษ์ ตามังกร",
    phone: "0934213455",
    pay: "3000",
    status: "รออนุมัติ",
  },
  {
    key: 3,
    date: "2022-08-11T07:30:00.207536",
    code: "asdsad",
    branch: "ร้านขายยาวังทองหลาง",
    fullname: "สมพงษ์ ตามังกร",
    phone: "0934213455",
    pay: "3000",
    status: "อนุมัติ",
  },
];
