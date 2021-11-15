import loginBackground from "../../assets/images/login-page-bg.png";

import { device } from "../../constants/mediaQueries";
import Navbar from "../../parts/Navbar";

import React, { useState } from "react";
import styled from "styled-components";
import Input from "../../components/Input";

import Button from "../../components/Button";

import { withRouter } from "react-router-dom";
const LoginPage = (props) => {
	const [loginData, setLoginData] = useState({ username: "", password: "" });
	const { username, password } = loginData;
	const [errors, setErrors] = useState([]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setLoginData({ ...loginData, [name]: value });
		console.log(loginData);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!username.length || !password.length) {
			setErrors("Please fill out all the field");
		} else if (username !== "123" || password !== "123") {
			setErrors("Please enter a valid user id or password");
		} else {
			console.log("submitted succesfully");
			props.history.push("agent/account");
		}
	};

	const handleFocus = () => {
		setErrors("");
	};

	return (
		<Container>
			<Navbar />
			<Wrapper>
				<Background></Background>
				<LoginContainer>
					{/* <Back> */}
					{/* 	<i className="fas fa-arrow-left"></i> */}
					{/* </Back> */}
					{/* <Header> */}
					{/* 	<h3>Login with Mobile OTP</h3> */}
					{/* 	<h4>Enter your registered Mobile Number</h4> */}
					{/* </Header> */}
					<Form>
						<Input
							label="Enter Username"
							type="text"
							id="username"
							handleFocus={handleFocus}
							handleChange={handleChange}
							value={username}
						/>
						<Input
							label="Enter Password"
							type="password"
							id="password"
							handleChange={handleChange}
							handleFocus={handleFocus}
							value={password}
						/>
						<Error>
							<span role="alert">{errors}</span>
						</Error>
						<Button handleSubmit={handleSubmit} value="login" />
					</Form>
					<Footer>
						<p>@ 2021 Desoso, Inc. All right reserved</p>
					</Footer>
				</LoginContainer>
			</Wrapper>
		</Container>
	);
};

const Container = styled.div`
	background: #fff;

	height: calc(100vh - 90px);
	width: 100%;
`;
const Wrapper = styled.div`
	display: flex;
	height: 100%;
	width: 100%;
`;
const Background = styled.div`
	background-image: url(${loginBackground});
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	width: 45%;
	height: 100%;
	@media ${device.sm} {
		display: none;
	}
`;

const LoginContainer = styled.div`
	width: 55%;
	height: 100%;
	background: #fff;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;

	@media ${device.sm} {
		width: 100%;
		background-image: url(${loginBackground});
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
	}
`;
// const Header=styled.header`
// margin:10px 0;
// 	font-family: 'Josefin Sans', sans-serif;
// 	text-align:center;
// 	h4{
// 		color:rgba(0, 0, 0, 0.6);
// 		margin-top:10px;
// 	}
// 	@media ${device.sm} {
// 		color:#fff;
// 		h4{
// 			color:#fff;
// 		}
// 	}
// `
const Footer = styled.footer`
	font-family: "Lato", sans-serif;
	color: rgba(19, 52, 116, 0.33);

	@media ${device.sm} {
		color: #fff;
	}
`;
// const Back = styled.button`
// 	border: none;
// 	background: transparent;
// 	position: absolute;
// 	font-size: 1.5rem;
// 	left: 0;
// 	top: 20px;
// 	/*margin: 1rem;*/
// 	color: rgba(0, 0, 0, 0.6);
// 	cursor: pointer;
// `;
const Error = styled.div`
	font-size: 14px;
	font-weight: 400;
	font-family: "Lato", sans-serif;
	color: red;
`;
const Form = styled.form`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: auto 0;
`;
export default withRouter(LoginPage);
