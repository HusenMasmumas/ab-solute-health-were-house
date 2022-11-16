import { FC } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Input, InputNumber, InputNumberProps, InputProps } from "antd";
import styled from "styled-components";

interface CInputProps extends InputProps {
  option?: {
    search: boolean;
  };
}

type NonationType = {
  WithSearchICON: FC<CInputProps>;
  CInputNumberSytle: FC<CInputNumberProps>;
};

const InputSytle = styled(Input)<InputProps>`
  width: 100%;
  border-radius: 5px !important;
  ${({ readOnly }) =>
    readOnly
      ? ` &:hover,
    &:active,
    &:focus {
      cursor: default;
      border-color: inherit;
      box-shadow: none;
  }`
      : null};
  background-color: #fff !important;
  color: #000 !important;
`;

const CInput: FC<InputProps> & NonationType = ({
  className = "!py-0 h-[45px]",
  ...props
}) => {
  return <InputSytle className={className} {...props} />;
};

const withSearchICON: FC<CInputProps> = ({ option, ...props }) => {
  return (
    <CInput
      prefix={
        option?.search ? (
          <SearchOutlined style={{ fontSize: 20, color: "#F0F0F0" }} />
        ) : undefined
      }
      {...props}
    />
  );
};

interface CInputNumberProps extends InputNumberProps {
  text_align?: "end" | "start";
}
const InputNumberSytle = styled(InputNumber)<CInputNumberProps>`
  width: 100%;
  border-radius: 5px !important;  
  .ant-input-number-input-wrap{
    padding:2px;
  }
  .ant-input-number-input{
    padding-right: 5px !important;
    text-align: ${({ text_align }) => `${text_align}`}};
  }
  background-color: #fff !important;  
  color: #000 !important;
`;
const CInputNumberSytle: FC<CInputNumberProps> = ({
  prefix = "฿",
  size = "large",
  min = 0,
  controls = false,
  text_align = "start",
  ...props
}) => {
  return (
    <InputNumberSytle
      prefix={prefix}
      size={size}
      min={min}
      controls={controls}
      text_align={text_align}
      {...props}
    />
  );
};

CInput.WithSearchICON = withSearchICON;
CInput.CInputNumberSytle = CInputNumberSytle;
export default CInput;
