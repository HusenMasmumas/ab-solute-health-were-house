import Table_1 from '../Table_1';

const Order = () => {
  return (
    <>
        <Table_1 data={mock} tableName="รายการใบสั่งซื้อ"/>
    </>
  )
}

export default Order


const mock = [
  {
    index: 1,
    key:1,
    date: "2022-08-11T07:30:00.207536",
    code: "P03558721",
    branch: "ร้านขายยาวังทองหลาง",
    fullname: "สมพงษ์ ตามังกร",
    phone: "0934213455",
    pay: "3000",
    status: "อนุมัติ",
  },
  {
    index: 2,
    key:2,
    date: "2022-08-11T09:30:00.207536",
    code: "P0358991",
    branch: "ร้านขายยาวังทองหลาง",
    fullname: "อัญญา เบญจมินทร์",
    phone: "0934213455",
    pay: "3000",
    status: "รออนุมัติ",
  },
  {
    index: 3,
    key:3,
    date: "2022-08-11T10:30:00.207536",
    code: "P01346688",
    branch: "ร้านขายยาวังทองหลาง",
    fullname: "ชาลิสา กฤษณ์",
    phone: "0934213455",
    pay: "3000",
    status: "ยกเลิก",
  },
];