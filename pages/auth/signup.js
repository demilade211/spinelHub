import React, { useState, useEffect, useContext } from 'react'
import Head from 'next/head';
import styled from 'styled-components';
import AuthInput from '../../components/form/AuthInput';
import AuthButton from '../../components/form/AuthButton';
import Link from "next/link";
import Router from "next/router"

const SignUp = () => {

  const [open, setOpen] = React.useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true)
  const [loading, setLoading] = useState(false)
  const [snackInfo, setSnackInfo] = useState({ openSnack: false, type: "", message: "" })
  const [user, setUser] = useState({
    email: "",
    password: "",
  })

  useEffect(() => {
    const isComplete = Object.values(user).every(item => Boolean(item))//check if all is not empty
    isComplete ? setButtonDisabled(false) : setButtonDisabled(true)
  }, [user])

  // const handleSubmit = async (e) => {
  //     e.preventDefault();

  //     const form = new FormData();
  //     form.set('email', user.email);
  //     form.set('password', user.password);

  //     setButtonDisabled(true)
  //     setLoading(true)

  //     if (validateInput(user, setSnackInfo, setButtonDisabled, setLoading)) {
  //         dispatch({
  //             type: "ADD_USER",
  //             payload: user,
  //         })

  //         await loginUser(form, setSnackInfo, setButtonDisabled, setLoading)
  //     }


  // }
  return (
    <Con>
      <InnerCon>
        <div className='logo mb-3' onClick={() => Router.push(`/`)}>
          <img src="/images/pages/auth/logo.svg" alt="img" />
        </div>
        <p className='sub'>Create an account or <Link href="/auth/login">Sign in </Link></p>
        <AuthInput place="Email address" type="text" />
        <AuthInput place="Password" type="password" />
        <div className='forgot-con mb-5'>
          <p className="forgot">Forgot Password?</p>
        </div>
        <AuthButton content="Continue" />
        <p className='agree'>By continuing, you agree to SpinelHub's <span>Terms of Service</span> and <span>Privacy Policy </span></p>
      </InnerCon>
    </Con>
  )
}

const Con = styled.div`
    width: 100%;
    height: 100vh; 
    display: flex;
    justify-content: center;
    align-items: center;
    background:white;
`;

const InnerCon = styled.div`
    width: 588px;  
    display: flex;
    flex-direction:column;
    align-items:center;
    padding: 40px 32px;
    @media (max-width: 800px) { 
        width: 80%;
        padding: 20px 20px; 
    }
    .logo{
      cursor: pointer;
    }
    .sub{
        color: var(--grey-700, #101113);
        text-align: center; 
        font-family: Poppins;
        font-size: 24px;
        font-style: normal;
        font-weight: 500;
        line-height: 140%; /* 33.6px */
        margin-bottom:30px;
        @media (max-width: 700px) { 
            font-size: 18px;
        }
        a{
            color: var(--primary-400, #295BFF);
            font-family: Poppins;
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: 140%;
            text-decoration-line: underline;
            cursor: pointer;
            @media (max-width: 700px) { 
                font-size: 18px;
            }
        }
    }
    .forgot-con{
        width: 100%;
        .forgot{
            color: var(--grey-700, #101113); 
            font-family: Poppins;
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: 150%; /* 24px */
            text-align:right;
        }
    }
    .agree{
        color: var(--grey-700, #101113);
        font-family: Poppins;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        span{
            text-decoration-line: underline;
        }
    }
`;

export default SignUp