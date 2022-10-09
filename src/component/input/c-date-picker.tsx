import {
    PickerProps,
    RangePickerProps,
  } from "antd/es/date-picker/generatePicker";
  import styled from "styled-components";
//   import { ITheme, ThemeOptions, ThemeTypes } from "../../constrant/theme";
  import CDate from "./c-date";
  import { ConfigProvider } from 'antd';
  export const StyleCDatePicker = styled(CDate)`
  height:43px;
  width: 100%;
  `;
  
  type CDatePickerProps = PickerProps<any> & {
  };
  
  const CDatePicker = (props: CDatePickerProps) => {
    const { ...rest } = props;
    // const themeProps = ThemeOptions[theme];
    return (
      <ConfigProvider getPopupContainer={(trigger:any) => trigger.parentElement}>
        <StyleCDatePicker  {...rest} />
      </ConfigProvider>
    )
  };
  
  type CRangePickerProps = RangePickerProps<any> & {

  };
  
  const RangePicker = (props: CRangePickerProps) => {
    const { ...rest } = props;
    // const themeProps = ThemeOptions[theme];
    return (
      <StyleCDatePicker.RangePicker
        style={{ height: 45, width: "100%" }}
        {...rest}
      />
    );
  };
  
  CDatePicker.RangePicker = RangePicker;
  
  export default CDatePicker;
  