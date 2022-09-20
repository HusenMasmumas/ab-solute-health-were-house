import React, {useState, useEffect}from 'react'
import { Select, SelectProps } from "antd";
import styled from "styled-components";

interface Props extends SelectProps {
    state:string,
    background:string,
}

const StyledSelect = styled(Select)<{bg:string}>`
    color: #FFFFFF;
    .ant-select-selector{
        background-color: ${({bg})=>bg} !important;
        border-radius: 15px !important;
    }
`;
const OPTIONS = [ "รออนุมัติ", "อนุมัติ", "ยกเลิก"];
const OPTIONS2 = ["อนุมัติ", "รอเตรียมพัสดุ"];
const CSelectTable = ( { state, background, ...props } :  Props) => {
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const [filteredOptions, setFilteredOptions] = useState<string[]>([]);

    const selectMode1 = ()=>{
        setFilteredOptions(OPTIONS.filter(
            (o) => !selectedItems.includes(o)
        ))
    }

    const selectMode2 = ()=>{
        setFilteredOptions(OPTIONS2.filter(
            (o) => !selectedItems.includes(o)
        ))
    }

    useEffect(()=>{
        setSelectedItems([state])
    },[])

    useEffect(()=>{
        if(selectedItems[0] === 'อนุมัติ' || selectedItems[0] === 'รอเตรียมพัสดุ' )
            { selectMode2() }
        else
            { selectMode1() }
    },[selectedItems])

  return (
    <StyledSelect
            bg={background}
            placeholder="Inserted are removed"
            value={selectedItems}
            onChange={(value:any)=>{
                setSelectedItems([value])
            }}
            style={{ width: "150px" }}
            className="!rounded-lg"
            dropdownStyle={{padding:'0px'}}
          >
            {filteredOptions.map((item) => (
            //   <StyledSelect.Option key={item} value={item} className={`!bg-[red]`}>
              <StyledSelect.Option key={item} value={item} className={`!bg-[${background}]`}>
                {item}
              </StyledSelect.Option>
            ))}
    </StyledSelect>
  )
}

export default CSelectTable