import React, { useContext, useState, useRef, useEffect } from 'react'
import AppLayout from '../../layouts/AppLayout';
import styled from "styled-components";
import Quicklinks from '../../components/Quicklinks';
import RightSide from '../../components/pages/product/RightSide';
import Tab from '@mui/material/Tab';
import { StyledTab, StyledTabs } from "../../utils/CustomStyles"
import { getOneProduct } from "../../services/product"
import { useRouter } from "next/router"

const OneProduct = () => {

  const router = useRouter();

  const { productId } = router.query; 
  const [value, setValue] = React.useState('one');
  const [snackInfo, setSnackInfo] = React.useState({ openSnack: false, type: "", message: "" })
  const [loading, setLoading] = React.useState(false)
  const [product, setProduct] = React.useState({})

  useEffect(() => {
    
    try {
      const fetchProducts = async () => {
        setLoading(true)
        const response = await getOneProduct(productId)
        setLoading(false)
        setProduct(response.product)
      };
      fetchProducts();

    } catch (error) {
      setLoading(false)
      alert(error)
    }
  }, []);
  console.log(product);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppLayout>
      <QuickLinkCon>
        <Quicklinks next="Shop products" />
      </QuickLinkCon>
      <Con>
        <div className='grid-con'>
          <Left>
            {[0, 0, 0, 0].map((val, index) => (<div className={`item ${index === 0 && "first-item"}`}></div>))}
          </Left>
          <RightSide product={product}/>
        </div>
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="Post Type"
          variant="scrollable"
          scrollButtons="auto"
        >
          <StyledTab value="one" label="Additional information" />
          <StyledTab value="two" label="Description" />
        </StyledTabs>
        {
          value === "one" ?
            <p className='info'>1If there is a product description, type it here. If there is a product description, type it here.If there is a product description, type it here.If there is a product description, type it here.If there is a product description, type it here.</p>
            :
            <p className='info'>2If there is a product description, type it here. If there is a product description, type it here.If there is a product description, type it here.If there is a product description, type it here.If there is a product description, type it here.</p>
        }
      </Con>
    </AppLayout>
  )
}

const Con = styled.div`
    width: 100%; 
    padding: 24px 120px 40px 120px;  
    @media (max-width: 1200px) { 
        padding: 24px;
    }
    .grid-con{
        width: 100%;
        display: grid;
        grid-template-columns: 50% 50%; 
        row-gap:15px;
        margin-bottom:100px;
        @media (max-width: 1200px) { 
            grid-template-columns: 100%;
            margin-bottom:40px;
        }
    }
    .info{
      color: var(--grey-500, #494A50);
      font-family: Poppins;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 24px */
      margin-top:40px;
    }
`;

const Left = styled.div`
  width: 100%;  
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap:9px; 
  row-gap:9px;
  @media (max-width: 1200px) { 
       
  } 
  .item{ 
    height: 152px;
    background: #F5F5F6;
  }
  .first-item{
    grid-column: 1/4;
    height: 300px;
  }
`;


const QuickLinkCon = styled.div`
    width: 100%; 
    height: 56px;
    padding: 16px 120px;
    margin-top: 98px; 
    background: var(--off-white, #FCFCFC);
    margin-bottom:30px;
    @media (max-width: 1200px) { 
        padding: 24px;
    }
`;



export default OneProduct