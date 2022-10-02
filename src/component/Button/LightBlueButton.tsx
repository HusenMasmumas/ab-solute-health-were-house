import BaseButton, { BaseButtonProps } from "./BaseButton";
import styled from "styled-components";

interface Props extends BaseButtonProps {}

const BlueButton = styled(BaseButton)<Props>`
  color: #FFFFFF;
  background-color: #4E8FCC;
  ${({ fontSize }) => ( fontSize ? `font-size: ${fontSize};` : null)}}
  ${({ width }) => ( width ? `font-size: ${width};` : null)}}
  ${({ height }) => ( height ? `font-size: ${height};` : null)}}
  &:hover{
    background-color: #4680B7;
    color: #FFFFFF;
  }
`;

export default BlueButton