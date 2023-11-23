import React, { useState } from "react";
import styled from 'styled-components';
import ProductCard from "../../ProductCard";


const DealsSection = () => {
  const [active, setActive] = useState(0);
  return (
    <Con>
      <div className="head">
        <div className="line"></div>
        <h1 className="mx-3">Daily Deals!</h1>
        <div className="line"></div>
      </div>
      <div className="tab-con">
        <p onClick={()=>setActive(0)} className={`not-active ${active === 0 && "active"}`}>New Arrivals</p>
        <p onClick={()=>setActive(1)} className={`not-active ${active === 1 && "active"}`}>Best Sellers</p>
      </div>
      <div className="products-con">
        {[1,2,3,4,5,6,7].map((val,index)=><ProductCard index={index}/>)}
      </div>
    </Con>
  )
}

const Con = styled.section`  
  width: 100%;  
  padding: 12px 120px 64px 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1200px) { 
    padding: 50px;
  }
  @media (max-width: 600px) { 
    padding: 20px;
  }
  .head{
    display: flex;
    align-items: center;
    margin-bottom:20px;
    .line{
      width: 97px;
      height: 1.5px;
      background: var(--grey-700, #101113);
    }
    h1{
      color: var(--grey-700, #101113); 
      font-family: Poppins;
      font-size: 24px;
      font-style: normal;
      font-weight: 600;
      line-height: 140%; /* 33.6px */
      @media (max-width: 405px) { 
        font-size: 18px;
      }
    }
  }
  .tab-con{
    display: flex;
    margin-bottom:20px;
    .not-active{
      color: var(--grey-500, #494A50);
      font-family: Poppins;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 150%; /* 24px */
      margin-right:20px;
      cursor: pointer;
    }
    .active{
      color: #000; 
    }
  }
  .products-con{ 
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap:10px;
    row-gap: 20px;
    justify-content:center;
    @media (max-width: 1200px) { 
      grid-template-columns: 1fr 1fr 1fr;
    }
    @media (max-width: 700px) { 
      grid-template-columns: 1fr 1fr ;
      column-gap:5px;
    }
    @media (max-width: 400px) { 
      grid-template-columns: 1fr ; 
    }
  }
`;

export default DealsSection