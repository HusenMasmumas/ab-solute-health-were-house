  import styled from "styled-components";
  import { ConfigProvider, DatePicker, DatePickerProps } from 'antd';
  
  export const StyleCDatePicker = styled(DatePicker)`
  height:45px;
  width: 100%;
  border-radius: 5px !important;
  `;
    
  const CDatePicker = (props: DatePickerProps) => {
    
    return (
      <ConfigProvider getPopupContainer={(trigger:any) => trigger.parentElement}>
        <StyleCDatePicker  size="large"/>
      </ConfigProvider>
    )
  };
  
  export default CDatePicker;
  