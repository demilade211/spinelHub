import React from 'react'
import AppLayout from '../../layouts/AppLayout';
import styled from "styled-components";

const OneProduct = () => {
  return (
    <AppLayout>OneProduct</AppLayout>
  )
}

const Con = styled.div`
    width: 100%; 
    padding: 24px 120px 40px 120px; 
    margin-top: 98px; 
    @media (max-width: 1200px) { 
        padding: 24px;
    }
    .grid-con{
        width: 100%;
        display: grid;
        grid-template-columns: 70% 28%;
        column-gap:15px;
        row-gap:15px;
        @media (max-width: 1200px) { 
            grid-template-columns: 100%;
        }
    }
`;

export default OneProduct