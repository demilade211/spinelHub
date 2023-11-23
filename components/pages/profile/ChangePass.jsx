import React from 'react'
import styled from "styled-components";
import AuthInput from '../../form/AuthInput';
import AuthButton from '../../form/AuthButton';

const ChangePass = () => {
  return (
    <Con>
      <AuthInput label="Old Password" place="Old Password" type="password"/>
      <AuthInput label="New Password" place="New Password" type="password" />
      <AuthInput label="Confirm Password" place="Confirm Password" type="password" />
      <AuthButton content="Save Changes" />
    </Con>
  )
}

const Con = styled.div`
  width: 100%;  
`;

export default ChangePass