import { Button, ButtonProps } from "antd";
import styled from "styled-components";

export interface BaseButtonProps extends ButtonProps {
  fontSize?: string;
  width?: string;
  height?: string;
  color?: string;
  backGroundColor ?: string;
  borderColor?:string;
}

const BaseButton = styled(Button)<BaseButtonProps>`
  
  margin-top: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  
  font-size: 16px;
  width: 140px;
  height: 45px;
  color: #949594;
  border-radius: 8px !important;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export default BaseButton;
