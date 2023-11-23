import React from 'react'
import styled from "styled-components";
import AuthInput from '../../form/AuthInput';
import MySelect from '../../form/MySelect';
import MyTextArea from '../../form/MyTextArea';
import AuthButton from '../../form/AuthButton';
import MyUpload from '../../form/MyUpload';

const ProductUpload = () => {
  const [swich, setSwich] = React.useState(false);
  return (
    <Con>
      <TabCon>
        <div className={`switch ${!swich && "active"}`} onClick={() => setSwich(false)}>
          <p>Single</p>
        </div>
        <div className={`switch ${swich && "active"}`} onClick={() => setSwich(true)}>
          <p>Bulk</p>
        </div>
      </TabCon>
      <div className='grid-con'>
        <AuthInput label="Product name" type="text" classs="first-item" />
        <MySelect label="Category" options={[]} big={true} />
        <AuthInput label="In stock" type="number" />
        <MyTextArea label="Description" classs="first-item" />
        <MyUpload label="Product image" classs="first-item" />
        <div className='w-full flex justify-end first-item'>
          <div className='w-full md:w-1/4'>
            <AuthButton content="Upload Product" />
          </div>
        </div>
      </div>
    </Con>
  )
}

const Con = styled.div`
  width: 100%;   
  display: flex;
  flex-direction:column;
  align-items: center;
  .grid-con{
    width: 100%;
    display: grid;
    grid-template-columns: 69% 30%;
    column-gap: 10px;
    @media (max-width: 1200px) { 
      grid-template-columns:100%; 
    } 
    .first-item{
      grid-column:1/3;
      @media (max-width: 1200px) { 
        grid-column:1/2;
    } 
    }
  }
`;

const TabCon = styled.div`
  width: 252px; 
  height: 40px; 
  border-radius: 8px;
  background: var(--grey-grey-50, #F5F5F6);
  display: flex;
  margin-top:30px;
  margin-bottom:30px;
  .switch{
    width:50%;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    p{
      color: var(--grey-700, #101113);
      font-family: Poppins;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 150%; /* 24px */
      text-transform: capitalize;
    }
  }
  .active{
    background: #DEDEE0;
  }
`;

export default ProductUpload