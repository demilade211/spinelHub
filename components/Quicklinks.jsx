import React from 'react'
import styled from 'styled-components';
import Router from "next/router"

const Quicklinks = ({ next }) => {
    return (
        <Con>
            <span onClick={() => Router.push(`/`)}>Home</span>
            <img className='mx-2' src="/images/components/next.svg" alt="img" />
            <span>{next}</span>
        </Con>
    )
}

const Con = styled.div` 
    display: flex;
    align-items: center;
    @media (max-width: 1200px) { 
        display: none;
    }
    span{
        color: var(--pure-black, #000);
        font-family: Roboto;
        font-size: 16px;
        font-style: normal;
        font-weight: 300;
        line-height: 150%; /* 24px */
        cursor: pointer;
        &:hover {
            color: var(--brand-color, #DB0F31); /* Remove background color on hover */  
            transition: 400ms ease-in;
        }
    }
`;

export default Quicklinks