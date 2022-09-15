import {
    PickerProps,
    RangePickerProps,
  } from "antd/es/date-picker/generatePicker";
  import styled from "styled-components";
//   import { ITheme, ThemeOptions, ThemeTypes } from "../../constrant/theme";
  import CDate from "./c-date";
  
  export const StyleCDatePicker = styled(CDate)`
  width: 100%;
  `;
  
  type CDatePickerProps = PickerProps<any> & {
  };
  
  const CDatePicker = (props: CDatePickerProps) => {
    const { ...rest } = props;
    // const themeProps = ThemeOptions[theme];
    return <StyleCDatePicker  {...rest} />;
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
  