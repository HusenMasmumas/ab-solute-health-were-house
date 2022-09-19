import { Button, ButtonProps } from "antd";
import styled from "styled-components";

export interface CreateButtonProps extends ButtonProps {}

const StyledButton = styled(Button)`
  width: 170px;
  height: 45px;
  align-items: center;
  justify-content: center;
  display: flex;
  background: #77c48b;
  font-size: 20px;
  color: #ffffff;
  border-radius: 4px;
`;

const CreateButton = (props: CreateButtonProps) => {
  return <StyledButton {...props} />;
};
export default CreateButton;
