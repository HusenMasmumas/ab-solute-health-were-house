import CHeader from 'component/headerPage/Header'
import { t } from 'i18next'
import React from 'react'

type Props = {}

const ManagePurcheaseOrder = (props: Props) => {
  return (
    <div>
      <CHeader 
        keyHeader="report"
        arrPath={['report','damageReport']}
      />
    </div>
  )
}

export default ManagePurcheaseOrder