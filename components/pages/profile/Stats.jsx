import React from 'react'
import styled from 'styled-components';

const Stats = () => {
    return (
        <Con>
            <div className='grid-con'>
                <WithdrawCon>
                    <div className='det'>
                        <p>Gross Earnings</p>
                        <h1>₦3000</h1>
                    </div>
                    {/* <div className='withdraw-btn'  >
                        <p>Withdraw</p>
                    </div> */}
                </WithdrawCon>
                <InfoConBlack dark={false}>
                    <p>Products</p>
                    <h1>10</h1>
                </InfoConBlack>
                <InfoConBlack dark={false}>
                    <p>Users</p>
                    <h1>2</h1>
                </InfoConBlack>
                <InfoConBlack dark={false}>
                    <p>Orders</p>
                    <h1>2</h1>
                </InfoConBlack>
                <InfoConBlack dark={false}>
                    <p>Out Of Stock</p>
                    <h1>2</h1>
                </InfoConBlack>
            </div>
        </Con>
    )
}

const Con = styled.div`
    width:100%; 
    height:100%; 
    padding:0px 30px;  
    p{
        font-style: normal;
        font-weight: 400;
        font-size: 14px; 
        color: #667085;
        margin-bottom:20px;
    }
    .grid-con{
        width:100%; 
        display:grid;
        grid-template-columns:1.5fr 1fr 1fr;
        columns-gap:10px;
        row-gap: 20px;
        margin-top:20px;
        margin-bottom:20px;
        @media (max-width: 1100px) {
            grid-template-columns:1fr 1fr;
            row-gap:10px;
        }
        @media (max-width: 600px) {
            grid-template-columns:100%;
            row-gap:10px;
        }
    }
`;

const WithdrawCon = styled.div` 
    height: 88px; 
    margin-right:10px; 
    background: #295BFF; 
    border-radius: 8px;
    padding:20px; 
    display:flex;
    justify-content:space-between; 
    align-items:center;
    .det{
        p{
            font-style: normal;
            font-weight: 400;
            font-size: 14px;  
            color: #FFFFFF;
            margin-bottom:0px;
        }
        h1{
            font-style: normal; 
            font-weight: 600;
            font-size: 24px; 
            color: #FFFFFF;
        } 
    }
    .withdraw-btn{
        width: 85px;
        height: 34px; 
        background: rgba(255, 255, 255, 0.15);
        border-radius: 8px;
        display:flex;
        justify-content:center;
        align-items:center;
        cursor:pointer;
        p{ 
            font-style: normal;
            font-weight: 500;
            font-size: 14px; 
            color: #FFFFFF;
            margin-bottom:0px;
        }
    }
    
`;

const InfoConBlack = styled.div` 
    height: 88px; 
    margin-right:10px;
    cursor: pointer;
    border: ${({ dark }) =>
        dark ? "1px solid #2AC48A" : "1px solid #CCCFD6"};
    background: ${({ dark }) =>
        dark ? "#2AC48A" : "#FFFFFF"}; 
    border-radius: 8px;
    padding:20px; 
    p{
        font-style: normal;
        font-weight: 400;
        font-size: 14px;  
        color: ${({ dark }) =>
        dark ? "#FFFFFF" : "#555D6F"};
        margin-bottom:0px;
    }
    h1{
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        color:#14161B;
        font-weight: ${({ dark }) =>
        dark ? "600" : "400"};
    } 
    
`;

export default Stats