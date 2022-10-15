import { CopyFilled, SearchOutlined } from "@ant-design/icons";
import { Input, InputNumber, InputNumberProps, InputProps} from "antd";
import styled from 'styled-components'

interface CInputProps extends InputProps {
    option?: {
      search: boolean }; // เช็คไอคอน
}

const InputSytle = styled(Input)`
  width: 100%;
  border-radius: 5px !important;
`

const CInput = ({className='!py-0 h-[45px]', ...props}: InputProps) => {
  return (
        <InputSytle 
          className={className}
          {...props} 
        />
  )
}

const withSerchICON = ({option, ...props}: CInputProps) => {
  return (
        <CInput 
         prefix={
          option?.search ? (
            <SearchOutlined style={{ fontSize: 20, color: "#F0F0F0" }} />
          ) : undefined}
        {...props} 
        />
  )
}


const InputNumberRSytle = styled(CInput)`
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


const InputNumberSytle = styled(InputNumber)`
  width: 100%;
`
const CInputNumberSytle = ({ 
  prefix="฿",
  size='large',
  min=0,
  controls=false, 
  ...props}:InputNumberProps) => {
  return (
    <InputNumberSytle  
      prefix={prefix}
      size={size}
      min={min}
      controls={controls}
      {...props}
    />
  )
}

CInput.InputNumberR = InputNumberR
CInput.withSerchICON = withSerchICON
CInput.CInputNumberSytle = CInputNumberSytle
export default CInput