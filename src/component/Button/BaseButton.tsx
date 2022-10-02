import { Button, ButtonProps } from "antd";
import styled from "styled-components";

export interface BaseButtonProps extends ButtonProps {
  fontSize?: string;
  width?: string;
  height?: string;
  color?: string;
}

const BaseButton = styled(Button)<BaseButtonProps>`
  
  margin-top: 30px;

  display: flex;
  align-items: center;
  justify-content: center;
  
  font-size: 16px;
  width: 140px;
  height: 45px;
  color: #949594;
  borderRadius: 4px;
`;

export default BaseButton;
