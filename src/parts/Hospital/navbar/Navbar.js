import React,{useContext} from "react";
import logo from "../../../assets/images/logo1.png";
import styled from "styled-components";
import { withRouter,Link } from "react-router-dom";
 import {device} from '../../../constants/mediaQueries';
import NavbarItem from './NavbarItem';
import {SidebarContext} from '../../../helpers/SidebarContext';

const Navbar = (props) => {
	const {  toggleSidebar } = useContext(SidebarContext);
	return (
		<Container>
			<Wrapper>
				<LogoWrapper>
					<img className="logo" src={logo} alt="logo" />
				</LogoWrapper>
				<Banner><p>hospital master admin</p></Banner>
			</Wrapper>
			<StatusBar>
			
			{props.location.pathname !== "/hospital" && (
					<>
					<i onClick={toggleSidebar} className="fas fa-bars bars"></i>
					<NavbarItem name="Add Manager"/>
			<NavbarItem name="Billing Access"/>
			<NavbarItem name="Account"/>
						<Link to="/hospital"><i className="fas fa-sign-out-alt"></i></Link>
					</>
				)}
			</StatusBar>
		</Container>
	);
};
const Container = styled.nav`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 15vh;
	width: 100%;
	position: -webkit-sticky;
	position: sticky;
	top: 0;
	background: #fff;
	z-index: 100;
`;
const Wrapper = styled.div`
	display: flex;
	background: #fff;
	justify-content: flex-start;
	height:calc(15vh - 30px);
	align-items: center;
	.profile{
		width:3rem;
		height:auto;
		margin-right:1rem;
	}
`;
const StatusBar = styled.div`
	background: #003300;
	height: 30px;
	width: 100%;
	margin-bottom: 1px;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	i {
		cursor: pointer;
		color: white;
		margin: 0 1rem;
	}
	
	.bars {
		display:none;
		margin-right: auto;
	}
	@media ${device.xs} {
		.bars{
			display:block;
		}
	}
`;
const Banner = styled.div`
position:absolute;
left:50%;
transform: translate(-50%, 0);
	font-family: "Josefin Sans", sans-serif;
	text-align:center;

p{
	text-transform:uppercase;
	font-size:1.2rem;
	color:#fff;
	padding:.5rem 1rem;
	@media ${device.xs} {
		font-size:0.75rem;
		}
	

}

background: rgb(0,51,0);
background: linear-gradient(90deg, rgba(0,51,0,1) 0%, rgba(0,51,0,0.75) 100%);
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
	
`
const LogoWrapper = styled.div`
	.logo {
		width: 10rem;
		height: auto;
		@media ${device.xs} {
		width:6rem;
		}
		
	}
`;
export default withRouter(Navbar);
