import React from 'react'
import AppLayout from '../layouts/AppLayout';
import styled from "styled-components";
import GreyBox from '../components/GreyBox';
import FullBlueButton from '../components/FullBlueButton';
import MySelect from '../components/form/MySelect';
import BlueButton from '../components/BlueButton';
import WishProduct from '../components/pages/wish/WishProduct';

const wishlist = () => {
    return (
        <AppLayout>
            <Con>
                <GreyBox title={`Wishlist(${2})`}>
                    <InCartCon>
                        {[0, 0].map(val => <WishProduct />)}
                    </InCartCon>
                </GreyBox>
                <Navi>
                    <img className="mr-2" src="/images/pages/cart/aleft.svg" alt="img" />
                    <p>Go back and continue shopping</p>
                </Navi>
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

export default wishlist