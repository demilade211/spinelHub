import React from 'react'
import AppLayout from '../layouts/AppLayout';
import styled from "styled-components";
import GreyBox from '../components/GreyBox';
import CartProduct from '../components/pages/cart/CartProduct';
import FullBlueButton from '../components/FullBlueButton';
import MySelect from '../components/form/MySelect';
import BlueButton from '../components/BlueButton';

const cart = () => {
    return (
        <AppLayout>
            <Con>
                <div className='grid-con'>
                    <GreyBox title={`Cart(${2})`}>
                        <InCartCon>
                            {[0, 0].map(val => <CartProduct />)}
                        </InCartCon>
                    </GreyBox>
                    <GreyBox title="Cart Summary">
                        <InSumCon>
                            <div className='flex items-center justify-between mb-4'>
                                <p className='top-para'>Items total (2)</p>
                                <p className='top-para'>₦234,000</p>
                            </div>
                            <div className='flex items-center justify-between mb-6'>
                                <p className='bot-left'>Subtotal</p>
                                <p className='bot-right'>₦234,000</p>
                            </div>
                            <FullBlueButton>Proceed to checkout</FullBlueButton>
                        </InSumCon>
                    </GreyBox>
                </div>
                <Navi>
                    <img className="mr-2" src="/images/pages/cart/aleft.svg" alt="img" />
                    <p>Go back and continue shopping</p>
                </Navi>
                <GreyBox title="Estimate Shipping and Tax">
                    <InCartCon>
                         <p className='q-para'>Enter your destination to get a shipping estimate</p>
                         <div className='four-grid'>
                            <MySelect label="Country"/>
                            <MySelect label="Region/State"/>
                            <MySelect label="Zip/postal code"/>
                            <BlueButton>Get quote</BlueButton>
                         </div>
                    </InCartCon>
                </GreyBox>
            </Con>
        </AppLayout>

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

const InCartCon = styled.div`
    width: 100%; 
    padding: 30px 20px;  
    .q-para{
        color: var(--grey-600, #2A2A2E); 
        font-family: Poppins;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 21px */
        margin-bottom:20px;
    }
    .four-grid{
        width: 100%;
        display: grid; 
        grid-template-columns:1fr 1fr 1fr auto;
        column-gap:10px;
        row-gap:30px;
        align-items: center;
        @media (max-width: 1200px) { 
            grid-template-columns:1fr 1fr;
        }
        @media (max-width: 448px) { 
            grid-template-columns:1fr ;
        }
    }
`;

const InSumCon = styled.div`
    width: 100%; 
    padding: 40px 20px;  
    .top-para{
        color: var(--grey-700, #101113); 
        font-family: Poppins;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 21px */
    }
    .bot-left{
        color: var(--grey-700, #101113); 
        font-family: Poppins;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 150%; /* 24px */
    }
    .bot-right{
        color: var(--grey-700, #101113);
        text-align: center; 
        font-family: Poppins;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: 150%; /* 30px */
    }
`;

const Navi = styled.div`
    margin: 20px 0;
    display: flex;
    p{
        color: var(--primary-400, #295BFF);
        text-align: center; 
        font-family: Poppins;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 21px */
    }
`;



export default cart