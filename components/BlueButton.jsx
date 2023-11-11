import React from 'react'
import styled from 'styled-components';

const BlueButton = ({children,type,onClick}) => {
  return (
    <BlueBtn onClick={onClick}>{children}</BlueBtn>
  )
}

const BlueBtn = styled.button`  
    min-width:181px;
    height: 44px;
    display: flex;
    justify-content:center;
    align-items:center;
    padding: 12px 16px;  
    border:none;
    border-radius: 4px;
    background: #295BFF;
    line-height: normal; 
    color: #FFF; 
    text-align: center;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 24px */
    cursor:pointer;
    outline:none; 
`;

export default BlueButton