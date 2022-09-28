import React from "react";
import styled from "styled-components";
import BaseButton, { BaseButtonProps } from "./BaseButton";
import { useTranslation } from "react-i18next";
const StyledButton = styled(BaseButton)`
  color: #949594;
  font-size: 16px;
  height: 50px;
  border-radius: 8px;
  margin-top: 0px;
`;
export interface TabeButtonProps extends BaseButtonProps {
  text: string;
}

const TabeButton = ({ text, ...props }: TabeButtonProps) => {
  const { t } = useTranslation();
  return <StyledButton {...props}>{`${t(text)}`}</StyledButton>;
};

export default TabeButton;
