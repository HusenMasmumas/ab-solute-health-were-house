import SearchForm, { IsearchFormItem } from 'component/Form/searchForm';
import CHeader from 'component/headerPage/Header';
import { t } from 'i18next';
import React from 'react'
import TableStoresBranches from 'views/stores_branches/TableStoresBranches';

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
    label: "รหัสสินค้า",
    input: {
      type: "input",
      options: {
        search: true,
      },
    },
  },
  {
    name: 'SKU',
    label: 'SKU',
    input: {
      type: "input",
      options: {
        search: true,
      },
    },
  },
  {
    name: "name",
    label: 'ชื่อสินค้า',
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
          {key:1, value:'notDamage', label:'ไม่เสียหาย'},
          {key:2, value:'damage', label:'เสียหาย'}
        ],
      },
    },
  },
]

const onFinish = (values: any) => {
  //โยนเข้า create query
  console.log("Received values of form: ", values);
};
const DamageReport = (props: Props) => {
  return (
    <div className="bg-[#F5F5F5] m-0 p-0 ">
      <CHeader 
        keyHeader="stores&branches"
        nevigate={{
          keytext:"createShop", 
          fn:()=>{console.log('nevigate');}}} 
        arrPath={[t('stores&branches')]}
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

export default DamageReport