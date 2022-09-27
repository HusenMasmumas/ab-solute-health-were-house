import React, { useState, useEffect } from "react";
import { ConfigProvider, Select, SelectProps } from "antd";
import styled from "styled-components";

interface Props  {
  background: string;
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

const StyledSelect = styled(Select)<  Omit<Props, "selection">  >`
  color: #ffffff;
  margin: 0px;
  .ant-select-selector {
    background-color: ${({ background }) => background} !important;
    border-radius: 10px 10px 10px 10px !important;
    margin: 0px;
  }

  .ant-select-selection-item {
    background-color: ${({ background }) => background} !important;
  }
`;

const CSelectTable = ({ background, selection, ...props }: Props) => {

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

      style={{ width: "100%" }}
      className={"!text-center"}
      dropdownStyle={{
        padding: "0px",
        borderRadius: "0px 0px 10px 10px",
        // backgroundColor: "red",
      }}
    >
      {option.map((item:IOptionTable) => (
        <StyledSelect.Option key={item.label} value={item.label} className={`!text-center`}>
          {item.label}
        </StyledSelect.Option>
      ))}
    </StyledSelect>
    </ConfigProvider>
  );
};

export default CSelectTable;
