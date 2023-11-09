import React from 'react'
import styled from 'styled-components';
import Navbar from "../components/Navbar"
import Footer from '../components/Footer';

const AppLayout = ({children}) => {
  return (
    <Con>
      <Navbar/> 
      {children}
      <Footer/>
    </Con>
  )
}

const Con = styled.div`  
  width: 100%;   
  overflow:hidden;
`;

export default AppLayout