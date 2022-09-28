import SearchForm, { IsearchFormItem } from 'component/Form/searchForm';
import { useTranslation } from 'react-i18next';
import Table_1 from './Table/Table_1';

type Props = {}

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
      name: 'nameShop',
      label: 'ชื่อร้าน',
      input: {
        type: "input",
        options: {
          search: true,
        },
      },
    },
    {
      name: "fullName",
      label: 'ชื่อ-นามสกุล',
      input: {
        type: "input",
        options: {
          search: true,
        },
      },
    },
    {
      name: "phone",
      label: 'เบอร์โทร',
      input: {
        type: "input",
        options: {
          search: true,
        },
      },
    },
  ]


  const onFinish = (values: any) => {
    //โยนเข้า create query
    console.log("Received values of form: ", values);
  };

const Order = (props: Props) => {
  const { t } = useTranslation();
  return (
    <div>
        <SearchForm elements={elements} onFinish={onFinish} />
        <Table_1 data={mock} tableName="รายการใบสั่งซื้อ"/>
    </div>
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