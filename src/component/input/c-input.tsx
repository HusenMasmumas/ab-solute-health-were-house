import React from 'react'
import { CopyFilled, SearchOutlined } from "@ant-design/icons";
import { Input, InputNumber, InputNumberProps, InputProps} from "antd";
import { useTranslation } from "react-i18next";
// import style from 'styled-components'

interface CInputProps extends InputProps {
    search?: boolean; // เช็คไอคอน
    darkmode?: boolean;
}

const CInput = ({search, ...props}: CInputProps) => {
  return (
    <div>
        <Input placeholder="default size" prefix={
        search ? (
          <SearchOutlined style={{ fontSize: 20, color: "#F0F0F0" }} />
        ) : undefined}
        {...props} 
        />
    </div>
  )
}

export default CInput