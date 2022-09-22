import { Button } from 'antd'
import { useTranslation } from "react-i18next";
import React from 'react'
import NevigationPath, { INevigationPath } from 'component/Path/nevigationPath';

type ICHeader = {
    keyHeader :string;
    nevigate? : {
      keytext:string,
      fn: () => void;
    }
    arrPath?:string[]
}

const CHeader = ({keyHeader ,nevigate, arrPath=[], ...props}: ICHeader) => {
    const { t, i18n } = useTranslation();
  return (
    <div className="flex mb-5">
        <div className="w-3/5 ">
          <div className="text-3xl">{i18n.exists(keyHeader) ? `${t(keyHeader)}`: keyHeader }</div>
          <NevigationPath textPath={arrPath}/>
        </div>
        
       {
           nevigate && <div className="w-2/5 h-5/5 justify-end flex items-center ">
           <Button 
              className="!bg-[#77C48B] !text-lg !h-11 !rounded-md !border-[#77C48B] !text-white"
              onClick={nevigate.fn}
           >
             {`${t(nevigate.keytext)}`}
           </Button>
         </div> 
       }
      </div>
  )
}

export default CHeader