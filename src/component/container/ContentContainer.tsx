import styled from 'styled-components';

type Props = {
    children: React.ReactNode;
};
const Tages = styled.div `
  overflow: auto;
  height: 78vh;
  ::-webkit-scrollbar {
    width: 0px;
  }
  
  ::-webkit-scrollbar-track {
    background: #f1f1f1; 
  }
   
  ::-webkit-scrollbar-thumb {
    background: #888; 
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: #555; 
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