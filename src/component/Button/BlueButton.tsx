import BaseButton, { BaseButtonProps } from "./BaseButton";
import styled from "styled-components";

interface Props extends BaseButtonProps {}

const BlueButton = styled(BaseButton)<Props>`
  color: #FFFFFF;
  background-color: #4E8FCC;
  ${({ fontSize }) => ( fontSize ? `font-size: ${fontSize};` : null)}}
  ${({ width }) => ( width ? `width: ${width};` : null)}}
  ${({ height }) => ( height ? `height: ${height};` : null)}}
  &:hover,
  &:active,
  &:focus{
    background-color: #4680B7;
    color: #FFFFFF;
  }
`;

export default BlueButton