import styled from "styled-components";
import BaseButton, { BaseButtonProps } from "./BaseButton";
import { useTranslation } from "react-i18next";
const StyledButton = styled(BaseButton)<{active:number}>`
  color: #949594;
  font-size: 16px;
  height: 50px;
  border-radius: 8px;
  margin-Top: 0px;  
  background-color: ${({ active }) => ( active ? '#0069d9 !important' : "white !important")}};
  color:  ${({ active }) => ( active ? "white !important" : '#0069d9 !important' )}};

`;
export interface TabeButtonProps extends BaseButtonProps {
  text: string;
  active: boolean;
}

const TabeButton = ({ text, active=false , ...props }: TabeButtonProps) => {
  const { t } = useTranslation();
  return <StyledButton  active={active ? 1 : 0} {...props}>{`${t(text)}`}</StyledButton>;
};

export default TabeButton;
