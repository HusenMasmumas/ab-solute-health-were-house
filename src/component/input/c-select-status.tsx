import { Select, SelectProps } from "antd";
import { useEffect, useState } from "react";
import styled from "styled-components";

interface Props extends SelectProps {
  state: string;
  background: string;
}

const StyledSelect = styled(Select)<{ bg: string }>`
  color: #ffffff;
  .ant-select-selector {
    background-color: ${({ bg }) => bg} !important;
    border-radius: 4px !important;
  }
`;
const OPTION = ["เปิดการขาย", "ปิดการขาย"];
const CSelectStatus = ({ state, background }: Props) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [filteredOptions, setFilteredOptions] = useState<string[]>([]);

  const selectMode = () => {
    setFilteredOptions(OPTION.filter((o) => !selectedItems.includes(o)));
  };

  useEffect(() => {
    setSelectedItems([state]);
  }, []);

  useEffect(() => {
    selectMode();
  }, [selectedItems]);

  return (
    <StyledSelect
      bg={background}
      value={selectedItems}
      onChange={(value: any) => {
        setSelectedItems([value]);
      }}
      style={{ width: "120px" }}
      dropdownStyle={{ padding: "0px" }}
    >
      {filteredOptions.map((item) => (
        <StyledSelect.Option
          key={item}
          value={item}
          className={`!bg-[${background}]`}
        >
          {item}
        </StyledSelect.Option>
      ))}
    </StyledSelect>
  );
};
export default CSelectStatus;
