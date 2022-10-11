import React from 'react'
import { CopyFilled, SearchOutlined } from "@ant-design/icons";
import { Input, InputNumber, InputNumberProps, InputProps} from "antd";
import { useTranslation } from "react-i18next";
import styled from 'styled-components'

interface CInputProps extends InputProps {
    option?: {
      search: boolean }; // เช็คไอคอน
}

const CInput = ({option, ...props}: CInputProps) => {
  // console.log(search);
  // console.log(pro);
  
  return (
        <Input 
         prefix={
          option?.search ? (
            <SearchOutlined style={{ fontSize: 20, color: "#F0F0F0" }} />
          ) : undefined}
        className='!py-0 h-[40px]'
        {...props} 
        />
  )
}


const InputNumberRSytle = styled(Input)`
  width: 100px;
  .ant-input{
    text-align: end
  }
`
const InputNumberR = (props:InputProps) => {
  return (
    <InputNumberRSytle 
      prefix='฿'
      {...props}
    />
  )
}

CInput.InputNumberR = InputNumberR
export default CInput