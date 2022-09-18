import CHeader from 'component/headerPage/Header'
import { t } from 'i18next'
import React, { useState } from 'react'
import TabeButton from 'component/Button/TabeButton'
type Props = {}

const arrPath = [
  ['purchaseOrderManagement','purchaseOrder'],
  ['purchaseOrderManagement','prepareGoods'],
  ['purchaseOrderManagement','delivery'],
  ['purchaseOrderManagement','returnOrder'],
]

const keyHeader = ['purchaseOrder', 'prepareGoods', 'delivery', 'returnOrder']

const ManagePurcheaseOrder = (props: Props) => {
  const [ tabe, setTabe ] = useState<number>(0);
  return (
    <div>
      <CHeader 
        keyHeader={keyHeader[tabe]}
        arrPath={arrPath[tabe]}
        nevigate= {tabe===0?{keytext:'createPurchase',fn:()=>{}} : undefined}
      />
      <div className='flex space-x-5'>
        <TabeButton onClick={()=>{setTabe(0)}}>0000</TabeButton>
        <TabeButton onClick={()=>{setTabe(1)}}>1111</TabeButton>
        <TabeButton onClick={()=>{setTabe(2)}}>2222</TabeButton>
        <TabeButton onClick={()=>{setTabe(3)}}>3333</TabeButton>
      </div>

    </div>
  )
}

export default ManagePurcheaseOrder