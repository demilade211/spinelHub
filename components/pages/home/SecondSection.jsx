import React from 'react'
import styled from 'styled-components';

const SecondSection = () => {
  return (
    <Con>
        <div className="prop flex items-center">
            <img className="mr-3" src="/images/pages/home/bus.svg" alt="img" />
            <div>
                <h1>Free Shipping</h1>
                <p>Free Shipping on all orders</p>
            </div>
        </div>
        <div className="prop flex items-center">
            <img className="mr-3" src="/images/pages/home/247.svg" alt="img" />
            <div>
                <h1>24/7 Support</h1>
                <p>Free Shipping on all orders</p>
            </div>
        </div>
        <div className="prop flex items-center">
            <img className="mr-3" src="/images/pages/home/cash.svg" alt="img" />
            <div>
                <h1>Money Return</h1>
                <p>Free Shipping on all orders</p>
            </div>
        </div>
        <div className="prop flex items-center">
            <img className="mr-3" src="/images/pages/home/off.svg" alt="img" />
            <div>
                <h1>Order Discount</h1>
                <p>Free Shipping on all orders</p>
            </div>
        </div>
    </Con>
  )
}

const Con = styled.section`  
  width: 100%; 
  display: grid ;
  justify-content: center;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap:20px;
  row-gap: 40px;
  padding: 64px 120px 32px 120px;
  @media (max-width: 1270px) { 
    grid-template-columns: 1fr 1fr 1fr ;
    padding: 50px;
  }
  @media (max-width: 1005px) { 
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 744px) { 
    grid-template-columns: 1fr;
  }
  .prop{
    div{
        h1{
            color: #000; 
            font-family: Poppins;
            font-size: 16px;
            font-style: normal;
            font-weight: 600;
            line-height: 150%; /* 24px */
        }
        p{
            color: #000; 
            font-family: Poppins;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%; /* 21px */
        }
    }
  }
`;

export default SecondSection