import React from 'react'
import AppLayout from '../layouts/AppLayout';
import styled from "styled-components";
import MySelect from '../components/form/MySelect';
import ProductCard from '../components/ProductCard';
import { FaBeer } from 'react-icons/fa';
import Quicklinks from '../components/Quicklinks';

const products = () => {
    return (
        <AppLayout>
            <QuickLinkCon>
                <Quicklinks next="All categories"/>
            </QuickLinkCon>
            <Con>
                <div className='w-full flex items-center justify-between'>
                    <h1 className='p-head'>All categories</h1>
                    <MySelect place="Sort By" />
                </div>
                <div className='grid-con'>
                    <Left>
                        {[0, 0, 0, 0, 0, 0, 0].map(val =>
                            <div className='flex items-center mb-5'>
                                <FaBeer />
                                <p className='ml-3'>Devices</p>
                            </div>
                        )}
                    </Left>
                    <Right>
                        {[0, 0, 0, 0, 0, 0, 0].map(val => <ProductCard />)}
                    </Right>
                </div>
            </Con>
        </AppLayout>
    )
}
const Con = styled.div`
    width: 100%; 
    padding: 24px 120px 40px 120px;  
    @media (max-width: 1200px) { 
        padding: 24px;
    }
    .p-head{
        color: var(--grey-700, #101113); 
        font-family: Poppins;
        font-size: 24px;
        font-style: normal;
        font-weight: 500;
        line-height: 140%; /* 33.6px */
        margin-bottom:30px;
    }
    .grid-con{
        width: 100%;
        display: grid;
        grid-template-columns:30% 70%;
        column-gap:15px;
        row-gap:15px;
        @media (max-width: 1200px) { 
            grid-template-columns: 100%;
        }
    }
`;

const QuickLinkCon = styled.div`
    width: 100%; 
    height: 56px;
    padding: 16px 120px;
    margin-top: 98px; 
    background: var(--off-white, #FCFCFC);
    margin-bottom:30px;
    @media (max-width: 1200px) { 
        padding: 24px;
    }
`;

const Left = styled.div`
    width: 100%;   
    padding: 30px;
    @media (max-width: 1200px) { 
        display: none;
    }
    div{
        p{
            color: var(--grey-700, #101113);
            font-family: Poppins;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%; /* 24px */
        }
    }
`;

const Right = styled.div`
    width: 100%;    
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap:10px;
    row-gap: 20px;
    justify-content:center; 
    @media (max-width: 700px) { 
      grid-template-columns: 1fr 1fr ;
      column-gap:5px;
    }
    @media (max-width: 450px) { 
      grid-template-columns: 1fr ; 
    }
`;

export default products