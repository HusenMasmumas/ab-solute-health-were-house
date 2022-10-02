import BaseButton, { BaseButtonProps } from "./BaseButton";
import styled from "styled-components";

interface Props extends BaseButtonProps {}

const WhilteButton = styled(BaseButton)<Props>`
  color: #4D4D4D;
  background-color: #FFF;
  ${({ fontSize }) => ( fontSize ? `font-size: ${fontSize};` : null)}}
  ${({ width }) => ( width ? `width: ${width};` : null)}}
  ${({ height }) => ( height ? `height: ${height};` : null)}}
  ${({ color }) => ( color ? `color: ${color};` : null)}}
  &:hover{
    background-color: #4E8FCC;
    color: #FFFFFF;
  }
`;

export default WhilteButton 