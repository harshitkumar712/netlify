import React from 'react';
import styled from 'styled-components';
import {device} from '../constants/mediaQueries';
const Input=({label,type,id,handleChange,value,handleFocus,error})=>{
	return(
		<Container>
		<label htmlFor={id}>{label}</label>
			<StyledInput type={type} id={id} name={id} onFocus={handleFocus} onChange={handleChange} value={value}  />
		</Container>
		)
}
const Container=styled.div`
	
	
	width:50%;
	font-family: 'Josefin Sans', sans-serif;
	label{
		font-size: 16px;
	}
	   @media ${device.sm} {
		label{
			color:#fff;
		}
	}
`

const StyledInput=styled.input`
    padding:5px 10px;
    font-size:16px;
	width:100%;
	height: 2.5rem;
	border: 1px solid #003300;
	font-family: 'Lato', sans-serif;
	font-weight:700;
    margin:10px 0;
 
`
export default Input;