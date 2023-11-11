import React from 'react' 
import styled from 'styled-components';
import {selectStyle} from "../../utils/CustomStyles"
import Select from 'react-select'

const MySelect = ({label,options,onChange,value}) => {
  return (
    <InputLabelCon>
        <Label>{label}</Label>
        <Select options={options} styles={selectStyle} value={value} onChange={onChange} placeholder="Select an option"/>
    </InputLabelCon>
  )
}

const InputLabelCon = styled.div`
    margin-bottom:30px;
`;
 

const Label = styled.div`
  color: var(--grey-700, #101113); 
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 21px */
    margin-bottom:10px;
`;

export default MySelect