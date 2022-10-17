import styled from 'styled-components';

type Props = {
    children: React.ReactNode;
};
const Tages = styled.div `
  overflow: auto;
  height: 80vh;
  padding-bottom: 50px;
  ::-webkit-scrollbar {
    width: 0px;
  }
`
const ContentContainer = ({ children }: Props) => {
  return (
    <Tages >
        {children}
    </Tages>
  )
}

export default ContentContainer