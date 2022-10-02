import CHeader from 'component/headerPage/Header'
import { useTranslation } from "react-i18next";
import React, { useEffect, useState } from 'react'
import TabeButton from 'component/Button/TabeButton'
import Order from 'views/purchase_order/manage/Order';
import Prepare from 'views/purchase_order/manage/Prepare';
import Delivery from 'views/purchase_order/manage/Delivery';
import SendBack from 'views/purchase_order/manage/SendBack';
import { useNavigate } from 'react-router-dom';

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
  let navigate = useNavigate();
  return (
    <div>
      <CHeader 
        keyHeader={keyHeader[tabe]}
        arrPath={arrPath[tabe]}
        // nevigate= {tabe===0?{keytext:'createPurchase',fn:()=>{ navigate('/purchase-order/create')}} : undefined}
        buttons={tabe===0?[{ 
            colorButton: 'green',
            keytext: 'addproductlist',
            fn:() => {navigate("/warehouse-management/create-store-cabinet")}}
        ]:undefined}
      />
      <div className='flex space-x-5 mb-3'>
        <TabeButton onClick={()=>{setTabe(0)}} text={'purchaseOrder'} active={tabe === 0 ? true : false }  />
        <TabeButton onClick={()=>{setTabe(1)}} text={'prepareGoods'} active={tabe === 1 ? true : false } />
        <TabeButton onClick={()=>{setTabe(2)}} text={'delivery'} active={tabe === 2 ? true : false }/>
        <TabeButton onClick={()=>{setTabe(3)}} text={'returnOrder'} active={tabe === 3 ? true : false }/> 
      </div>
      <div>
      {(() => {
        switch(tabe) {
          case 0:
            return <Order />
          case 1:
            return <Prepare />
          case 2:
            return <Delivery />
          case 3:
            return <SendBack />
        }
      })()}
      </div>
    </div>
  )
}

export default ManagePurcheaseOrder