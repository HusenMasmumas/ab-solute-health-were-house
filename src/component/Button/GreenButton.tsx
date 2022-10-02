import BaseButton, { BaseButtonProps } from "./BaseButton";
import styled from "styled-components";

interface Props extends BaseButtonProps {}

const GreenButton = styled(BaseButton)<Props>`
  color: #FFFFFF;
  background-color: #77C48B;
  ${({ fontSize }) => ( fontSize ? `font-size: ${fontSize};` : null)}}
  ${({ width }) => ( width ? `font-size: ${width};` : null)}}
  ${({ height }) => ( height ? `font-size: ${height};` : null)}}
  &:hover{
    background-color: #5F9C6F;
    color: #FFFFFF;
  }
`;

export default GreenButton