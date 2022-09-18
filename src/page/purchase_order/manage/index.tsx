import CHeader from 'component/headerPage/Header'
import { useTranslation } from "react-i18next";
import React, { useEffect, useState } from 'react'
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
        <TabeButton onClick={()=>{setTabe(0)}} text={'purchaseOrder'} />
        <TabeButton onClick={()=>{setTabe(1)}} text={'prepareGoods'} />
        <TabeButton onClick={()=>{setTabe(2)}} text={'delivery'} />
        <TabeButton onClick={()=>{setTabe(3)}} text={'returnOrder'}/> 
      </div>


    </div>
  )
}

export default ManagePurcheaseOrder