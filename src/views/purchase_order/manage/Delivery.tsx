import SearchForm, { IsearchFormItem } from 'component/Form/searchForm';
import React from 'react'

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
const Delivery = (props: Props) => {
  return (
    <div>
        <SearchForm elements={elements} onFinish={onFinish} />
    </div>
  )
}

export default Delivery