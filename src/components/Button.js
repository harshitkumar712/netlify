import React from "react";
import styled from "styled-components";

const Button = ({ value,handleSubmit }) => {
	return <StyledButton onClick={handleSubmit} >{value.toUpperCase()}</StyledButton>;
};

const StyledButton = styled.button`

border:none;
	background: ${props=>props.theme.secondaryColor};
	color: white;
	font-family: Josefin Sans;
	width: 25%;
	height: 2.5rem;
    cursor:pointer;
	margin-top:10px;
	margin-bottom:30px;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	&:hover{
	
}
`

;
export default Button;
