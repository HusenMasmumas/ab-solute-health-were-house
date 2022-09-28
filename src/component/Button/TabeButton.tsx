import React from "react";
import styled from "styled-components";
import BaseButton, { BaseButtonProps } from "./BaseButton";
import { useTranslation } from "react-i18next";
const StyledButton = styled(BaseButton)`
  color: #949594;
  font-size: 16px;
  height: 50px;
  border-radius: 8px;
  margin-Top: 0px;  

  &:active,&:focus {
    background-color: #0069d9 !important; 
    color: white;
  }
  
  :hover {
    background-color: #0069d9;
    color: white;
  }
`;
export interface TabeButtonProps extends BaseButtonProps {
  text: string;
}

const TabeButton = ({ text, ...props }: TabeButtonProps) => {
  const { t } = useTranslation();
  return <StyledButton {...props}>{`${t(text)}`}</StyledButton>;
};

export default TabeButton;
