import CHeader from 'component/headerPage/Header'
import { useTranslation } from "react-i18next";
import React, { useEffect, useState } from 'react'
import TabeButton from 'component/Button/TabeButton'
import SearchForm, { IsearchFormItem } from 'component/Form/searchForm';
type Props = {}

const arrPath = [
  ['purchaseOrderManagement','purchaseOrder'],
  ['purchaseOrderManagement','prepareGoods'],
  ['purchaseOrderManagement','delivery'],
  ['purchaseOrderManagement','returnOrder'],
]

const keyHeader = ['purchaseOrder', 'prepareGoods', 'delivery', 'returnOrder']

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
const ManagePurcheaseOrder = (props: Props) => {
  const [ tabe, setTabe ] = useState<number>(0);

  return (
    <div>
      <CHeader 
        keyHeader={keyHeader[tabe]}
        arrPath={arrPath[tabe]}
        nevigate= {tabe===0?{keytext:'createPurchase',fn:()=>{}} : undefined}
      />
      <div className='flex space-x-5 mb-3'>
        <TabeButton onClick={()=>{setTabe(0)}} text={'purchaseOrder'} />
        <TabeButton onClick={()=>{setTabe(1)}} text={'prepareGoods'} />
        <TabeButton onClick={()=>{setTabe(2)}} text={'delivery'} />
        <TabeButton onClick={()=>{setTabe(3)}} text={'returnOrder'}/> 
      </div>
      <div>
        <SearchForm elements={elements} onFinish={onFinish} />
      </div>

    </div>
  )
}

export default ManagePurcheaseOrder