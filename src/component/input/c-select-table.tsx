import React, { useState, useEffect, ReactNode } from "react";
import { ConfigProvider, Select, SelectProps } from "antd";
import styled from "styled-components";

interface Props  {
  background: string;
  hoverBackground: string;
  selection: ISelectTable;
}

interface IOptionTable {
  label: string,
  value: any,
  action: (values?: any) => void;
}
interface ISelectTable {
  leder: string,
  option: IOptionTable[]
}

const StyledSelect = styled(Select)<  Omit<Props, "selection" | "hoverBackground">  >`
  color: #ffffff;
  margin: 0px;
  .ant-select-selector {
    background-color: ${({ background }) => background} !important;
    border-radius: 10px 10px 10px 10px !important;
    margin: 0px;
  }

  .ant-select-dropdown{
    background-color: red !important;
  }
`;

const CSelectTable = ({ background, hoverBackground ,selection, ...props }: Props) => {

  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const { option=[]  } = selection

  useEffect(() => {
    setSelectedItems([selection?.leder ?? 'undefine']);
  }, []);

  const customizeRenderEmpty = () => (
    <div style={{backgroundColor:'red',height:'0px'}}>
    </div>
  );

  return (
    <ConfigProvider renderEmpty={customizeRenderEmpty}>
      <StyledSelect
        // {...props}
        background={background}
        value={selectedItems}
        onSelect={( value:any )=>{
        // console.log('onSelect::',value);
        // value.action()
        // console.log(option.find(item=> item.label === value));
        const find = option.find(item=> item.label === value)
        if(find){
          // console.log('find.label = ',find.label);
          find.action(find.value)
        }
      }}

      dropdownClassName='hover:!bg-violet-600 !text-center'
      style={{ width: "130px" }}
      className={"!text-center"}
      size='large'
      
      dropdownStyle={{
        margin: "0px",
        padding: "0px",
        borderRadius: "10px 10px 10px 10px",
      }}
    >
      {option.map((item:IOptionTable) => (
        // <StyledSelect.Option key={item.label} value={item.label} className={`!bg-[${background}] hover:!bg-violet-600`}>
        // <StyledSelect.Option key={item.label} value={item.label} className={`!bg-[${background}] hover:!bg-blue-500 !text-white`}>
          <StyledSelect.Option key={item.label} value={item.label} className={`!bg-[${background}] hover:!${hoverBackground} !text-white`}>
          {item.label}
        </StyledSelect.Option>
      ))}
    </StyledSelect>
    </ConfigProvider>
  );
};

export default CSelectTable;
