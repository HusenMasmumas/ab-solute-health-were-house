import { Button, ButtonProps } from "antd";
import styled from "styled-components";

export interface BaseButtonProps extends ButtonProps {}

const StyledButton = styled(Button)`
  margin-top: 30px;
  width: 140px;
  align-items: center;
  justify-content: center;
  display: flex;
  height: 45px;
`;
const BaseButton = (props: BaseButtonProps) => {
  return <StyledButton {...props} />;
};

export default BaseButton;
