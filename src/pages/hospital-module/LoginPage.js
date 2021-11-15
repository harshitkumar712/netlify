import React,{useState} from "react";
import styled from 'styled-components';
import logo from "../../assets/images/logo1.png";
import Button from '../../components/hospital/Button';
import Input from '../../components/hospital/Input';
import illustration from "../../assets/images/illustrations/HospitalLogin.svg";
//import {device} from '..//../constants/mediaQueries';

const LoginPage = () => {
	const [loginData,setLoginData]=useState({mobileNo:'',otp:''});
const{mobileNo,otp}=loginData;

const handleChange=(e)=>{
		const {name,value}=e.target;
setLoginData({...loginData,[name]:value});
console.log(loginData);
	}
	return (
		<Container>
		<Wrapper>
			<LogoWrapper>
					<img className="logo" src={logo} alt="logo" />
					</LogoWrapper>
					<Header>
						<h1>Welcome</h1>
						<h4>Please provide details to continue</h4>
					</Header>
					<Form>
	<Input  label="Mobile Number" type="number" id="mobileNo" handleChange={handleChange} placeholder="Enter Number" value={mobileNo}/>
	
	<Button >Get OTP</Button>
	<Input label="Enter OTP" type="number" id="otp" handleChange={handleChange} value={otp} placeholder="Enter OTP" />

	<Button>Login</Button>
</Form>
				
<Footer><h5><span>Copyright 2013 Inc Pvt Ltd</span></h5></Footer>
		</Wrapper>
		
		<img className="illustration" src={illustration} alt="illustration"/>

		</Container>
		)
};

const Container = styled.div`
	height:100vh;
	width:100vw;
.illustration{
	position:absolute;
	bottom:0;
	left:0;
	width:15rem;
}
`
const Wrapper = styled.div`
	height:100%;
	width:100%;
	display:flex;
	flex-direction:column;
	
	align-items:center;
	
`
const Header = styled.header`
font-family: Montserrat;
text-align:center;
	h1{
color:#000000;
font-weight:600;
	}
	h4{
color:#3E3E3E;
font-weight:400;
margin:1rem 0;
	}
`
const Form=styled.form`
	display:flex;
	flex-direction:column;
	justify-content:center;
	align-items:center;
	width:40vw;
`
const LogoWrapper = styled.div`

	.logo {
		width: 15rem;
		margin-left:60px;
		height: auto;
		
	}
`;
const Footer = styled.footer`	
	margin-top:auto;
margin-bottom:5rem;
width:40vw;
h5{
	font-family: Montserrat;
color:#3E3E3E;
font-weight: 400;
font-size: 1rem;

}
h5 {
   width: 100%; 
   text-align: center; 
   border-bottom: 1px solid #000; 
   line-height: 0.1em;
   margin: 10px 0 20px; 
   span{
   	background:#fff; 
    padding:0 10px; 
   }
} 


`


export default LoginPage;
