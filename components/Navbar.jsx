import React, { useState } from "react";
import styled from 'styled-components';
import Image from 'next/image'
import { useRouter } from 'next/router'
import Router from "next/router"
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { StyledMenu } from '../utils/CustomStyles'
import Avatar from '@mui/material/Avatar';
import { stringAvatar, stringToColor } from "../utils/helpers"
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from "../services/auth"

const Navbar = () => {
    const { user, status } = useSelector((state) => state.userReducer);

    const cartValue = status === "Authenticated"?user.cartItems.length:0;
    const wishValue = status === "Authenticated"?user.wishItems.length:0; 

    const [showNav, setShowNav] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorEl1, setAnchorEl1] = React.useState(null);
    const open = Boolean(anchorEl);
    const open1 = Boolean(anchorEl1);

    const router = useRouter();
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleClick1 = (event) => {
        setAnchorEl1(event.currentTarget);
    };
    const handleClose1 = () => {
        setAnchorEl1(null);
    };
    

    const isActive = route => router.pathname === route;
    return (
        <>
            <Con>
                <div className='left' onClick={() => Router.push(`/`)}>
                    <img className="mob-ham mr-2" src="/images/components/ham.svg" alt="img" onClick={() => setShowNav(!showNav)} />
                    <img className="cursor-pointer	" src="/images/components/logo.svg" alt="img" />
                </div>
                <div className="right flex items-center">
                    <SearchCon>
                        <input type="text" placeholder="Search for a product" />
                        <img src="/images/components/Search.svg" alt="img" />
                    </SearchCon>
                    <CurrencyCon>
                        <img className="" src="/images/components/Bill.svg" alt="img" />
                        <p className="mx-2">Naira</p>
                        <div className="img"><img src="/images/components/drop.svg" alt="img" /></div>
                    </CurrencyCon>
                    <div className="per-cart-love flex items-center">
                        <div className="icon">
                            <Badge badgeContent={Number(cartValue)} color="secondary"><img onClick={() => Router.push(`/cart`)} src="/images/components/cart.svg" alt="img" /></Badge>
                        </div>
                        <div className="icon mx-3">
                            <Badge badgeContent={Number(wishValue)} color="secondary"><img onClick={() => Router.push(`/wishlist`)} src="/images/components/Heart.svg" alt="img" /></Badge>
                        </div>
                        <div className="icon">
                            {status === "Authenticated" ? <Avatar onClick={handleClick1} {...stringAvatar(user.name)} /> : <img onClick={handleClick} className="" src="/images/components/Profile.svg" alt="img" />}
                            <StyledMenu
                                id="basic-menu1"
                                anchorEl={anchorEl1}
                                open={open1}
                                onClose={handleClose1}
                            >
                                <MenuItem onClick={() => Router.push(`/profile`)}>Profile</MenuItem>
                                <MenuItem onClick={logOut}>Logout</MenuItem>
                            </StyledMenu>
                            <StyledMenu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={() => Router.push(`/auth/login`)}>Login</MenuItem>
                                <MenuItem onClick={() => Router.push(`/auth/signup`)}>Sign Up</MenuItem>
                            </StyledMenu>
                        </div>
                    </div>
                </div>
                <div className='mobile-right'>
                    <div className="icon mr-3">
                        <img src="/images/components/Search.svg" alt="img" />
                    </div>
                    <div className="icon mr-3">
                        <Badge badgeContent={cartValue} color="secondary"><img onClick={() => Router.push(`/cart`)} src="/images/components/cart.svg" alt="img" /></Badge>
                    </div>
                    <div className="icon mr-3">
                        <Badge badgeContent={wishValue} color="secondary"><img onClick={() => Router.push(`/wishlist`)} src="/images/components/Heart.svg" alt="img" /></Badge>
                    </div>
                    <div className="icon">
                        {status === "Authenticated" ? <Avatar onClick={handleClick1} {...stringAvatar(user.name)} /> : <img onClick={handleClick} className="" src="/images/components/Profile.svg" alt="img" />}
                        <StyledMenu
                            id="basic-menu1"
                            anchorEl={anchorEl1}
                            open={open1}
                            onClose={handleClose1}
                        >
                            <MenuItem onClick={() => Router.push(`/profile`)}>Profile</MenuItem>
                            <MenuItem onClick={logOut}>Logout</MenuItem>
                        </StyledMenu>
                        <StyledMenu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={() => Router.push(`/auth/login`)}>Login</MenuItem>
                            <MenuItem onClick={() => Router.push(`/auth/signup`)}>Sign Up</MenuItem>
                        </StyledMenu>
                    </div>
                </div>
                {/* <div className={`mobile-nav ${showNav && "active"}`}>
                    <div className="close" onClick={() => setShowNav(false)} >
                        <img src="/images/components/ham.svg" alt="img" onClick={() => setShowNav(!showNav)} />
                    </div>
                    <ul>
                        <li onClick={() => Router.push(`/`)}>Home</li>
                        <li onClick={() => Router.push(`/about`)}>About</li>
                        <li onClick={() => Router.push(`/services`)}>Services</li>
                        <li onClick={() => Router.push(`/contact`)}>Contact</li>
                    </ul>
                </div> */}
            </Con>
        </>
    )
}

const Con = styled.div` 
    width:100%;     
    min-height: 90px;
    display: flex;
    justify-content: space-between;
    align-items:center; 
    padding: 20px 120px; 
    position: fixed;
    background-color:white;
    z-index: 2;
    @media (max-width: 1200px) { 
        padding: 20px 20px; 
    }
    @media (min-width: 1400px) {  
        padding: 20px 120px;
    }
    .left{  
        width: 270px;
        height: 30px; 
        display: flex;
        align-items: center;
        .mob-ham{
            display: none;
            @media (max-width: 1200px) { 
                display:block; 
            } 
        }
    }
    .right{
        width: 80%; 
        @media (max-width: 1000px) { 
            display:none; 
        } 
        .per-cart-love{
            .icon{
                height:100%;
                cursor: pointer;
                img{
                    width:40px; 
                }
            }
        }
    }
    .mobile-right{ 
        display:none; 
        .icon{
            img{
                width:30px;
            }
        }
        @media (max-width: 1000px) { 
            display:flex;
            align-items:center; 
        }
    }
    .mobile-nav{ 
        border: 1px solid black;
        position: absolute;
        width: 100%;
        top: -100%; /* Start above the viewport */
        left: 0;
        display: block; /* Change to 'none' when you want to hide it */ 
        border: 0.5px solid rgba(255, 255, 255, 0.04);
        background: var(--grey-grey-50, #F5F5F6); 
        padding: 20px 50px;
        opacity: 0; /* Start fully transparent */
        transition: 900ms ease-in;
        transform: translateY(0); /* Start at the original position */ 
        z-index:500;
        &.active {
            /* Add a class 'active' when you want to show the navigation */
            top: 0; /* Move it to the original position */
            opacity: 1; /* Make it fully visible */
            transform: translateY(0); /* Ensure it's at the original position */
        }
        .close{
            display:flex;
            justify-content:flex-end;
            align-items:center;
            margin-bottom:40px;
        }
        ul{
            li{
                text-align:left;
                list-style-type:none;
                margin-bottom:30px; 
                color: var(--grey-500, #494A50);
                font-family: Poppins;
                font-size: 15px;
                font-style: normal;
                font-weight: 400;
                line-height: 150%; /* 24px */
            }
        }
        @media (max-width: 1200px) { 
            display:block;  
        }
    }
`;


const NavButton = styled.button` 
    width: 172px;
    height: 44px;   
    padding: 10px 24px;
    border-radius: 4px;
    border:none;
    background: linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%); 
    line-height: normal;
    margin-left:30px; 
    color: #FFF;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400; 
    cursor:pointer;
    &:hover {
        background: none; /* Remove background color on hover */
        border: 2px solid #9A39FF; /* Add border on hover */
        color: #FFF; /* Text color on hover */
      }
    @media (max-width: 1200px) { 
        margin-left:0px;  
    }
`;

const SearchCon = styled.div` 
    width:100%;
    height: 56px;
    padding: 12px 16px;
    border-radius: 12px;
    border: 1px solid var(--grey-200, #B6B7BB);
    display:flex;  
    img{
        margin-right:10px;
    }
    input{
        width:100%;
        background:none;
        border:none;
        outline:none;  
        font-size: 14px; 
        color: var(--grey-400, #6B6C74); 
        font-family: Poppins;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 24px */
    }
    @media (max-width: 800px) {
        margin-bottom:10px;
    }
`;

const CurrencyCon = styled.div`  
    border-radius: 24px;
    padding: 8px; 
    border: 1px solid var(--grey-200, #B6B7BB);
    margin: 0 20px;
    display:flex;
    align-items: center;
    cursor:pointer;
    .img{
        width: 40px;
        height: 20px; 
        img{
            width:100%;
            height: 100%;
        }
    }
`;
export default Navbar