import React from 'react'
import styled from 'styled-components';
import BlueButton from '../../BlueButton';

const HeroSection = () => {
  return (
    <Con>
      <Left>
        <h1>Your one-stop shop for premium IT hardware</h1>
        <div>
          <BlueButton>Shop now</BlueButton>
        </div>
      </Left>
      <Right>
        <img className="mt-5" src="/images/pages/home/leftImg.svg" alt="img" />
      </Right>
    </Con>
  )
}

const Con = styled.section`  
  width: 100%;     
  height:55vh;
  display: flex;
  background: linear-gradient(90deg, #ECE9E6 0%, #FFF 100%);
  margin-top: 96px;
  @media (max-width: 1200px) { 
    flex-direction: column;
    height: auto;
  }
`;

const Left = styled.div`  
  width: 50%;     
  height: 100%;
  padding: 0px 120px;  
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 1200px) { 
    width: 100%;
    padding: 50px;
  } 
  h1{
    color: var(--grey-700, #101113);
    font-family: Poppins;
    font-size: 36px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 50.4px */
    margin-bottom:20px;
    @media (max-width: 1200px) { 
      font-size: 20px;
    }
  }
`;

const Right = styled.div`  
  width: 50%; 
  height: 100%; 
  display:flex;
  justify-content: center;
  align-items: center;
  background: url('/images/pages/home/bg.svg');
  background-position: center center; 
  background-repeat: no-repeat;
  background-size: cover;  
  padding: 0px 120px;
  @media (max-width: 1200px) { 
    width:100%;
    height: 382px;
    padding: 50px; 
    border: 1px solid black;
  }
  @media (max-width: 380px) {  
    background: url('/images/pages/home/mbg.svg');  
  }
`;

export default HeroSection