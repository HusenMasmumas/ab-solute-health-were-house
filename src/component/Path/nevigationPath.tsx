import React from 'react'
import { Breadcrumb } from 'antd';


export type INevigationPath = {
    textPath:string[]
}

const NevigationPath = ({textPath = [], ...props}: INevigationPath) => {
  return (
    <Breadcrumb>
        {
            textPath.map((item, index)=>{
                return(
                    <Breadcrumb.Item key={index}>
                        <span className='text-lg'>{item}</span>
                    </Breadcrumb.Item>
                )
            })
        }
    </Breadcrumb>
  )
}

export default NevigationPath