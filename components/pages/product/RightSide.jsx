import React from 'react'
import styled from "styled-components";

const RightSide = () => {
    return (
        <Right>
            <h1>Product name</h1>
            <h2>&#8358;234,000</h2>
            <p className='desc'>If there is a product description,
                type it here. If there is a product description,
                type it here.If there is a product description,
                type it here.If there is a product description,
                type it here.If there is a product description,
                type it here.
            </p>
            <div className='flex md:items-center flex-col md:flex-row'>
                <QuantityCon>
                    <CountBtn>-</CountBtn>
                    <p className='count'>2</p>
                    <CountBtn>+</CountBtn>
                </QuantityCon>
                <div className="cart-like con md:ml-10 ">
                    <BlueBtn>Add to cart</BlueBtn>
                    <div className="like-con ml-2">
                        <img className="" src="/images/pages/home/like.svg" alt="img" />
                    </div>
                </div>
            </div>
        </Right>
    )
}

const Right = styled.div`
    width: 100%;        
    padding: 30px;
    @media (max-width: 768px) { 
        padding: 0px;
    }
    h1{
      color: var(--grey-700, #101113); 
      font-family: Poppins;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 27px */
      margin-bottom:25px;
    }
    h2{
      color: var(--grey-700, #101113); 
      font-family: Poppins;
      font-size: 24px;
      font-style: normal;
      font-weight: 500;
      line-height: 140%; /* 33.6px */
      margin-bottom:20px;
    }
    .desc{
      color: var(--grey-500, #494A50); 
      font-family: Poppins;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 24px */
      margin-bottom:20px;
    }
    .cart-like{
      width: 100%;
      display: flex;
      align-items: center; 
      .like-con{
          border-radius: 4px;
          border: 1px solid var(--primary-100, #D9DDFF);
          width: 40px;
          height: 40px; 
          display: flex;
          justify-content: center;
          align-items: center;
      }
    } 
`;

const QuantityCon = styled.div` 
    display: flex;
    @media (max-width: 768px) { 
      margin-bottom:20px;
    }
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
`;

const BlueBtn = styled.button`  
    width:84%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
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

export default RightSide