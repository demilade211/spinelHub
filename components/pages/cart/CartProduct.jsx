import React from 'react'
import styled from 'styled-components';

const CartProduct = () => {
    return (
        <Con>
            <div className='left flex items-center justify-between flex-wrap'>
                <div className='flex items-center justify-between'>
                    <img className="" src="/images/pages/cart/spic.png" alt="img" />
                    <div>
                        <h2 className='p-name'>Product Name</h2>
                        <p className='avail'>In stock</p>
                    </div>
                </div>
                <p className='price'>₦234,000</p>
            </div>
            <div className='right flex items-center justify-between'>
                <QuantityCon>
                    <CountBtn>-</CountBtn>
                    <p className='count'>2</p>
                    <CountBtn>+</CountBtn>
                </QuantityCon>
                <DelCon>
                    <img className="mr-3" src="/images/pages/cart/trash.svg" alt="img" />
                    <p className='text'>Remove</p>
                </DelCon>
            </div>
            <div className='mob-right flex items-center justify-between'>
                <DelCon>
                    <img className="mr-3" src="/images/pages/cart/trash.svg" alt="img" />
                    <p className='text'>Remove</p>
                </DelCon>
                <QuantityCon>
                    <CountBtn>-</CountBtn>
                    <p className='count'>2</p>
                    <CountBtn>+</CountBtn>
                </QuantityCon>
            </div>
        </Con>
    )
}

const Con = styled.div`
    width: 100%;
    display: flex;
    flex-wrap:wrap;  
    margin-bottom:20px;
    @media (max-width: 950px) { 
        flex-direction:column;
    }
    .left{
        width: 50%;
        @media (max-width: 950px) { 
            width: 100%;
        } 
        .p-name{ 
            color: var(--grey-700, #101113);
            font-family: Poppins;
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: 150%; /* 24px */
        }
        .avail{ 
            color: var(--grey-700, #101113); 
            font-family: Poppins;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%; /* 21px */
        }
        .price{ 
            color: var(--grey-700, #101113);
            text-align: center; 
            font-family: Poppins;
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 150%; /* 30px */
        }
    }
    .right{
        width: 50%; 
        padding-left: 80px;
        @media (max-width: 950px) { 
            display: none;
        } 
    }
    .mob-right{
        width: 100%; 
        padding-left: 80px;
        display: none;
        margin-top:20px;
        @media (max-width: 950px) { 
            display: flex;
            padding-left:0;
        } 
    }
     

`;
const QuantityCon = styled.div` 
    display: flex;
    .count{
        color: #000;
        text-align: center; 
        font-family: Poppins;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 150%; /* 27px */
        margin:0 10px;
    }
`;

const DelCon = styled.span` 
    display: flex;
    align-items: center;
    .text{
        color: var(--secondary-300, #FF6229);
        text-align: center; 
        font-family: Poppins;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 150%; /* 24px */
    }
`;
const CountBtn = styled.button`  
    width: 24px;
    height: 24px; 
    justify-content:center;
    align-items:center; 
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
    &:disabled,
    button[disabled]{ 
      background:  #ccd8ff;
      color:white;
    }
`;

export default CartProduct