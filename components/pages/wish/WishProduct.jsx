import React from 'react'
import styled from 'styled-components';
import { removeFromWishList } from "../../../services/product"
import { RemoveFromWish } from "../../../redux/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";

const WishProduct = ({val}) => {
    const dispatch = useDispatch(); 

    const handleWish = async (e) => {
        dispatch(RemoveFromWish(val.product._id))
        await removeFromWishList(val.product._id)

    }

    return (
        <Con>
            <div className='flex items-center justify-between mb-3'>
                <img className="" src="/images/pages/cart/spic.png" alt="img" />
                <div>
                    <h2 className='p-name'>Product Name</h2>
                    <p className='avail'>{`${Number(val.product.stock) >= 1 ? "In Stock" : "Out Of Stock"}`}</p>
                </div>
            </div>
            <p className='price'>₦234,000</p>
            <div className='flex w-full  justify-between flex-row-reverse md:flex-col md:w-auto items-center'>
                <CountBtn>Buy now</CountBtn>
                <DelCon onClick={handleWish}>
                    <img className="mr-2" src="/images/pages/cart/trash.svg" alt="img" />
                    <p className='text'>Remove</p>
                </DelCon>
            </div>
        </Con>
    )
}

const Con = styled.div`
    width: 100%;
    display: flex;
    justify-content :space-between ;
    align-items: center;
    margin-bottom:20px;
    @media (max-width: 950px) { 
        flex-direction:column;
        align-items: flex-start;;
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

`;
const DelCon = styled.span` 
    display: flex;
    align-items: center;
    cursor: pointer;
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
    width: 120px;
    height: 44px; 
    justify-content:center;
    align-items:center; 
    border:none;
    border-radius: 8px;
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
    margin-bottom:10px;
`;

export default WishProduct