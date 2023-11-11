import React from 'react'
import styled from 'styled-components';

const ProductCard = () => {
  return (
    <Con>
      <div className="img-con">
        <img className="" src="/images/pages/home/pic.png" alt="img" />
      </div>
      <h1>Product Name</h1>
      <p>If there is a product description, type it here</p>
      <h2>₦234,000</h2>
      <div className="cart-like con">
        <BlueBtn>Add to cart</BlueBtn>
        <div className="like-con ml-2">
          <img className="" src="/images/pages/home/like.svg" alt="img" />
        </div>
      </div>
    </Con>
  )
}

const Con = styled.section`  
  width: 100%;  
  padding: 12px 8px;  
  cursor: pointer;
  .img-con{
    width: 100%;  
    height: 188px;
    margin-bottom:20px;
    background: var(--grey-grey-50, #F5F5F6);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h1{
    color: var(--grey-700, #101113); 
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 24px */
  }
  p{
    color: var(--grey-500, #494A50); 
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 21px */
    text-align: left;
    margin-bottom:10px;
  }
  h2{
    color: var(--grey-700, #101113); 
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 30px */
    margin-bottom:10px;
  }
  .cart-like{
    width: 100%;
    display: flex;
    align-items: center;
    visibility: hidden;
    @media (max-width: 1200px) { 
        visibility: visible;
    }
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
  &:hover{
    box-shadow: 0px 30px 60px 0px rgba(41, 91, 255, 0.15);
    .con{
        visibility: visible;
    }
  }
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

export default ProductCard