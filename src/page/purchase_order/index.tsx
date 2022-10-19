import CHeader from 'component/headerPage/Header'
import { useState } from 'react'
import TabeButton from 'component/Button/TabeButton'
import Order from 'page/purchase_order/order/Order';
import Prepare from 'page/purchase_order/prepare/Prepare';
import Delivery from 'page/purchase_order/delivery/Delivery';
import SendBack from 'page/purchase_order/sendBack/SendBack';
import { useNavigate } from 'react-router-dom';
import ContentContainer from 'component/container/ContentContainer';

const arrPath = [
  ['purchaseOrderManagement','purchaseOrder'],
  ['purchaseOrderManagement','prepareGoods'],
  ['purchaseOrderManagement','delivery'],
  ['purchaseOrderManagement','returnOrder'],
]

const keyHeader = ['purchaseOrder', 'prepareGoods', 'delivery', 'returnOrder']

const ManagePurcheaseOrder = () => {
  const [ tabe, setTabe ] = useState<number>(0);
  let navigate = useNavigate();
  return (
    <>
      <CHeader 
        keyHeader={keyHeader[tabe]}
        arrPath={arrPath[tabe]}
        buttons={tabe===0?[{ 
            colorButton: 'green',
            keytext: 'createPurchase',
            fn:() => {navigate("/purchase-order/create")}}
        ]:undefined}
      />
      <ContentContainer>
        <div className='flex space-x-5 mb-3'>
          <TabeButton onClick={()=>{setTabe(0)}} text={'purchaseOrder'} active={tabe === 0 ? true : false }  />
          <TabeButton onClick={()=>{setTabe(1)}} text={'prepareGoods'} active={tabe === 1 ? true : false } />
          <TabeButton onClick={()=>{setTabe(2)}} text={'delivery'} active={tabe === 2 ? true : false }/>
          <TabeButton onClick={()=>{setTabe(3)}} text={'returnOrder'} active={tabe === 3 ? true : false }/> 
        </div>
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
      </ContentContainer>
    </>
  )
}

export default ManagePurcheaseOrder