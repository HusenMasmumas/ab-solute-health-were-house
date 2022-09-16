import SearchForm, { IsearchFormItem } from 'component/Form/searchForm'
import CHeader from 'component/headerPage/Header'
import { t } from 'i18next'
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
    label: "เลขที่ใบสั่งซื้อ",
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
    name: "tel",
    label: 'เบอร์โทร',
    input: {
      type: "input",
      options: {
        search: true,
      },
    },
  },
  {
    name: "state",
    label: 'สถานะ',
    input: {
      type: "select",
      options: {
        values: [
          {key:1, value:'success', label:'เรียบร้อย'},  
          {key:2, value:'notsuccess', label:'ไม่เรียบร้อย'}
        ],
      },
    },
  },
]
const onFinish = (values: any) => {
  //โยนเข้า create query
  console.log("Received values of form: ", values);
};

const StockReport = (props: Props) => {
  return (
    <div className="bg-[#F5F5F5] m-0 p-0 ">
    <CHeader 
      keyHeader="report"
      arrPath={[t('report'), t('orderlist')]}
    />
    <div>
      <SearchForm elements={elements} onFinish={onFinish} />
    </div>
    {/* Table */}
    <div className="mt-10 bg-white">
      {/* <TableStoresBranches dataTable={data} headerTable={t("orderlist")}  /> */}
    </div>
  </div>
  )
}

export default StockReport