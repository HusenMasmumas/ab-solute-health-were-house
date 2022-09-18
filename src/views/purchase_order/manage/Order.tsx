import SearchForm, { IsearchFormItem } from 'component/Form/searchForm';
import React from 'react'
import { useTranslation } from 'react-i18next';
import TableStoresBranches from 'views/stores_branches/TableStoresBranches';
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
        <Table_1 />
    </div>
  )
}

export default Order