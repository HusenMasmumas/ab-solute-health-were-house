import React from 'react'
import { CopyFilled, SearchOutlined } from "@ant-design/icons";
import { Input, InputNumber, InputNumberProps, InputProps} from "antd";
import { useTranslation } from "react-i18next";
// import style from 'styled-components'

interface CInputProps extends InputProps {
    option?: {
      search: boolean }; // เช็คไอคอน
    darkmode?: boolean;
}

const CInput = ({option, ...props}: CInputProps) => {
  // console.log(search);
  // console.log(pro);
  
  return (
    <div>
        <Input 
        placeholder="default size" prefix={
          option?.search ? (
            <SearchOutlined style={{ fontSize: 20, color: "#F0F0F0" }} />
          ) : undefined}
        className='!py-0 h-[40px]'
        {...props} 
        />
    </div>
  )
}

export default CInput