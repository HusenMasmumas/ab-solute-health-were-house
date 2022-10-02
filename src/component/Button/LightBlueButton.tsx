import BaseButton, { BaseButtonProps } from "./BaseButton";
import styled from "styled-components";

interface Props extends BaseButtonProps {}

const LightBlueButton = styled(BaseButton)<Props>`
  color: #01438F;
  background-color: #F3F9FF;
  ${({ fontSize }) => ( fontSize ? `font-size: ${fontSize};` : null)}}
  ${({ width }) => ( width ? `font-size: ${width};` : null)}}
  ${({ height }) => ( height ? `font-size: ${height};` : null)}}
  
  &:hover{
    background-color: #F4F9FF;
    color: #01438F;
  }
`;

export default LightBlueButton