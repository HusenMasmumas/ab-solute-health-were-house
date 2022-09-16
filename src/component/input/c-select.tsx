import React from "react";
import { Select, SelectProps } from "antd";
const { Option } = Select;

interface IOption {
  values: {key:any, value:any, label:string}[];
  key: string;
  label: string;
}

interface CSelectProps extends SelectProps {
  option?: IOption;
  translation?: boolean;
}
const CSelect = ({ option , ...props}: CSelectProps) => {
  
  const getOptions = (): JSX.Element[] => {
    // const { values, key, label } = option as IOption;
    if(option){
    return  option?.values.map((item:{key:any, value:any, label:string}) => {
      return (
        <Option key={item.key} value={item.value}>
          {item.label}
        </Option>
      );
    });
    }
    return []
  };

  const options = getOptions();
  return (
    <Select
    {...props} 
    >
      {options}
    </Select>
  );
};

export default CSelect;
