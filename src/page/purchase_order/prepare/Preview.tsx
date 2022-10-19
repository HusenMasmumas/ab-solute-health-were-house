import CHeader, { IButton } from 'component/headerPage/Header';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

type Props = {}

const Preview = (props: Props) => {
  const navigate = useNavigate(); 
  return (
    <>
        <CHeader
          keyHeader="purchaseOrderManagement"
          arrPath={['purchaseOrderManagement','prepareGoods','รายละเอียดใบสั่งซื้อ','เตรียมสินค้า']}
          buttons={[
            { 
                colorButton: 'print',
                keytext: 'เตรียมสินค้า',
                fn:  () => {
                  console.log('print');
                }
            },
            { 
              colorButton: 'blue',
              keytext: 'เตรียมสินค้า',
              fn:  () => {
                navigate("/purchase-order/editPrepare");
              }
            },
            ]}
        />
    </>
  )
}

export default Preview