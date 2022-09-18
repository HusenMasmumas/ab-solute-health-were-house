import React from 'react'
import styled from "styled-components";
import BaseButton, {BaseButtonProps} from './BaseButton'

const StyledButton = styled(BaseButton)`
  color: #949594;
  font-size: 25px;
  height: 50px;
  border-radius: 8px;
`;
const TabeButton = (props: BaseButtonProps) => {
  return (
    <StyledButton {...props}/>
  )
}

export default TabeButton