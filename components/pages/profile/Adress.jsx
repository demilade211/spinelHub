import React from 'react'
import styled from "styled-components";

const Adress = () => {
  return (
    <Con>
      <p>
        Number 10, Bola street,<br />
        Berger,<br />
        Lagos state
      </p>
      <div className='flex items-center mt-3 md:mt-0'>
        <img className="mr-2" src="/images/pages/profile/edit.svg" alt="img" />
        <span>Edit</span>
      </div>
    </Con>
  )
}

const Con = styled.div`
  width: 100%;  
  height: 120px;
  padding: 24px 40px;
  border-radius: 8px;
  border: 1px solid var(--grey-200, #B6B7BB);
  background: var(--grey-grey-50, #F5F5F6);
  display:flex;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 400px) { 
    flex-direction:column;
    height: auto;
  }
  p{
    color: var(--grey-700, #101113); 
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
    @media (max-width: 500px) { 
      font-size: 14px;
    }
  }
  span{
    color: var(--secondary-300, #FF6229);
    text-align: center; 
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 24px */
  }
`;

export default Adress