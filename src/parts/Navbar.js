import React,{useState,useContext} from "react";
import logo from "../assets/images/logo1.png";
import styled from "styled-components";
import SearchBox from "../components/SearchBox";
import { withRouter,Link } from "react-router-dom";
import {device} from '../constants/mediaQueries';
import profile from "../assets/images/profile.png";
import Modal from '../components/Modal';
import { SidebarContext } from "../helpers/SidebarContext";
import Popup from 'reactjs-popup';


const Navbar = (props) => {
	const [modal,setModal]= useState(false);
	const { sidebarToggle, handleSidebarToggle } = useContext(SidebarContext);
	return (
		<Container>
			<Wrapper>
				<LogoWrapper>
					<img className="logo" src={logo} alt="logo" />
				</LogoWrapper>
				{props.location.pathname === "/agent/registered" && (
					<SearchBox />
				)}
				{props.location.pathname==="/agent/account"&&(
					<img src={profile} className="profile" alt="profile-avatar"/>
					)}
			</Wrapper>
			<StatusBar>
				{props.location.pathname !== "/agent" && (
					<>
						<i onClick={handleSidebarToggle} className="fas fa-bars bars"></i>
						{/* <i onClick={()=>setModal(prev=>!prev)} className="far fa-bell"></i> */}
						<Popup
      trigger={
        <i className="far fa-bell"></i>
      }
      position={['bottom center']}
      closeOnDocumentClick
      
    >
    <div style={{background:"white",padding:"5px",borderRadius:"5px",boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
}}><h4 style={{color:"#003300"}}>Notifications</h4>
            	<p>No notifications </p></div>
     
    </Popup>
						<Link to="/agent"><i className="fas fa-sign-out-alt"></i></Link>
					</>
				)}
				<Modal  open={modal} close={()=>setModal(false)}>

            	<h4 style={{color:"#003300"}}>Notifications</h4>
            	<p>No notifications </p>
            </Modal>

			</StatusBar>
		</Container>
	);
};
const Container = styled.nav`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 90px;
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
	justify-content: space-between;
	height:60px;
	align-items: center;
	.profile{
		width:3rem;
		height:3rem;
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
const LogoWrapper = styled.div`

	.logo {
		width: 160px;
		/*height: auto;*/
		
	}
`;
export default withRouter(Navbar);
