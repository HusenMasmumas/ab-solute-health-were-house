import { Button } from 'antd';
import styled from "styled-components";
import BaseButton, {BaseButtonProps} from './BaseButton'

const StyledButton = styled(BaseButton)`
  color: #01438F;
  background-color: #F3F9FF;
  font-size: 25px;
`;
const SearchButton = (props: BaseButtonProps) => {
  return (
    <StyledButton {...props}/>
  )
}

export default SearchButton