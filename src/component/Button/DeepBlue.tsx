import BaseButton, { BaseButtonProps } from "./BaseButton";
import styled from "styled-components";

interface Props extends BaseButtonProps {}

const DeepBlueButton = styled(BaseButton)<Props>`
  color: #FFFFFF;
  background-color: #004C97;
  ${({ fontSize }) => ( fontSize ? `font-size: ${fontSize};` : null)}}
  ${({ width }) => ( width ? `font-size: ${width};` : null)}}
  ${({ height }) => ( height ? `font-size: ${height};` : null)}}
  &:hover{
    background-color: #004487;
    color: #FFFFFF;
  }
`;

export default DeepBlueButton