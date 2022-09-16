import { Button } from 'antd';
import styled from "styled-components";
import BaseButton, { BaseButtonProps } from './BaseButton'

const StyledButton = styled(BaseButton)`
  font-size: 25px;
`;

const CleanButton = (props: BaseButtonProps) => {
  return (
    <StyledButton {...props} />
  )
}

export default CleanButton