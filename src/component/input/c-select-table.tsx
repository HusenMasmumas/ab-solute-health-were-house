import React, {useState, useEffect}from 'react'
import { Select, SelectProps } from "antd";
import styled from "styled-components";

interface Props extends SelectProps {
    state:string,
    background:string,
}

const StyledSelect = styled(Select)<{bg:string}>`
    color: #FFFFFF;
    margin: 0px;
    .ant-select-selector{
        background-color: ${({bg})=>bg} !important;
        border-radius: 10px 10px 10px 10px !important;
        margin: 0px;
    }
`;
const OPTIONS = [ "รออนุมัติ", "อนุมัติ", "ยกเลิก"];
const OPTIONS2 = ["อนุมัติ", "รอเตรียมพัสดุ", "สั่งอีกครั้ง"];
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
        if(selectedItems[0] === 'อนุมัติ')
            { 
                //ยิง API ไปอนุมัติ
                //fetch มาใหม่
                selectMode2() 
            }
        else if(selectedItems[0] === 'รออนุมัติ')
            {
                //ยิง API ไปยกเลิก
                //fetch มาใหม่ 
                selectMode1() 
            }
    },[selectedItems])

  return (
    <StyledSelect
            bg={background}
            value={selectedItems}
            onChange={(value:any)=>{
                if( value!=='รอเตรียมพัสดุ' && value!=='สั่งอีกครั้ง')
                    setSelectedItems([value])
                
                if( value==='รอเตรียมพัสดุ' )
                    console.log('ยิง API รอเตรียมพัสดุ');
                    
                if( value==='สั่งอีกครั้ง' )
                console.log('ยิง API สั่งอีกครั้ง');

            }}
            style={{ width: "110px" }}
            className={'!text-center'}
            dropdownStyle={{padding:'0px', borderRadius:'0px 0px 10px 10px'}}
          >
            {filteredOptions.map((item) => (
              <StyledSelect.Option key={item} value={item} className={`!text-center`}>
                {item}
              </StyledSelect.Option>
            ))}
    </StyledSelect>
  )
}

export default CSelectTable