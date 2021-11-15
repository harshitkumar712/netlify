import React from "react";
import styled from "styled-components";
// import {device} from '../constants/mediaQueries';
const Input = ({ label, type, id, handleChange, value,placeholder }) => {
	return (
		<Container>
			<label htmlFor={id}>{label}</label>
			<StyledInput
				type={type}
				id={id}
				name={id}
				onChange={handleChange}
				value={value}
				placeholder={placeholder}
			/>
		</Container>
	);
};
const Container = styled.div`
	width: 100%;
	font-family: "Josefin Sans", sans-serif;
	label {
		font-size: 16px;
		color: #3e3e3e;
		font-family: Montserrat;
		font-weight: 900;
		margin-bottom:5px;
	}
`;

const StyledInput = styled.input`
	padding: 6px 12px;
	font-size: 14px;
	width: 100%;
	height: 2.5rem;
	font-family: "Montserrat", sans-serif;
	font-weight: 400;
	background: #EFEFEF;
border: 1px solid rgba(0, 0, 0, 0.7);
border-radius: 5px;
margin-bottom:1.5rem;
`;
export default Input;
