import { Select, SelectProps } from "antd";
import { useEffect, useState } from "react";
import styled from "styled-components";

interface Props extends SelectProps {
  state: string;
  activeBackground?: string;
  onChange?: (value: string) => void;
  listOption?: { label: string; value: string }[];
  labelKey: string;
  valueKey: string;
  activeValue?: string;
  initialValue?: string;
}

const StyledSelect = styled(Select)<{ bg: string }>`
  color: #ffffff;
  .ant-select-selector {
    background-color: ${({ bg }) => bg} !important;
    border-radius: 4px !important;
  }
`;

const CSelectStatus = ({
  state,
  activeBackground = "",
  onChange,
  listOption = [],
  labelKey = "",
  valueKey = "",
  activeValue = "",
  initialValue = "",
}: Props) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [activeKey, setActiveKey] = useState("");

  useEffect(() => {
    setActiveKey(initialValue);
  }, []);

  useEffect(() => {
    setSelectedItems([state]);
  }, []);

  return (
    <StyledSelect
      bg={activeValue === activeKey ? activeBackground : "#949594"}
      value={selectedItems}
      onChange={(value: any) => {
        setSelectedItems([value]);
        setActiveKey(value);
        onChange && onChange(value);
      }}
      style={{ width: "120px" }}
      dropdownStyle={{ padding: "0px" }}
    >
      {listOption.map((item: any) => (
        <StyledSelect.Option
          key={item[labelKey] || ""} //item.label
          value={item[valueKey] || ""}
          // className={`!bg-[${background}]`}
          className={`!bg-[#F5F5F5]`}
        >
          {item[labelKey]}
        </StyledSelect.Option>
      ))}
      {/* {filteredOptions.map((item) => (
        <StyledSelect.Option
          key={item}
          value={item}
          className={`!bg-[${background}]`}
        >
          {item}
        </StyledSelect.Option>
      ))} */}
    </StyledSelect>
  );
};
export default CSelectStatus;
