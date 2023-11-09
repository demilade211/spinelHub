import styled from 'styled-components';

export default function Home() {
  return (
    <Con className='hi flex border'>
      <div>hi</div>
      <div>hi</div>
      <div>hi</div>
    </Con>
  );
}

const Con = styled.section`  
  width: 100%;     
  padding: 64px 90px 64px 90px; 
  border: 1px solid black;
  @media (max-width: 1200px) {  
    padding:30px;
  } 
     
`;