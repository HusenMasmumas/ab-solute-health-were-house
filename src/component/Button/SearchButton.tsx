import { Button } from "antd";
import styled from "styled-components";
import BaseButton, { BaseButtonProps } from "./BaseButton";

const StyledButton = styled(BaseButton)`
  color: #01438f;
  background-color: #f3f9ff;
  font-size: 16px;
  height: 45px;
`;
const SearchButton = (props: BaseButtonProps) => {
  return <StyledButton {...props} />;
};

export default SearchButton;
