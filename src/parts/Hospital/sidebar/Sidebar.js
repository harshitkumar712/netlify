import React,{useContext} from "react";
import styled from "styled-components";
//import { Link } from "react-router-dom";
import SidebarItem from './SidebarItem';
import { device } from "../../../constants/mediaQueries";
import { SidebarContext } from "../../../helpers/SidebarContext";


const SidebarItems = [
	{
		name: "reception",
		route: "/hospital/viewreception",
	},
	{
		name: "doctor admin",
		route: "/hospital/doctor",
	},
	{
		name: "nurse",
		route: "/hospital/nurse",
		small:true,

	},
	{
		name: "junior doctor",
		route: "/hospital/juniordoctor",
		small:true,

	},{
		name: "assistant doctor",
		route: "/hospital/assistantdoctor",
		small:true,

	},{
		name: "compounders",
		route: "/hospital/compounders",
		small:true,

	},{
		name: "lab technician",
		route: "/hospital/labtechnician",

	},{
		name: "pharmacist",
		route: "/hospital/pharmacist",

	},{
		name: "billing",
		route: "/hospital/billing",

	},{
		name: "payment settlement",
		route: "/hospital/payment",

	}
];

const Sidebar = () => {
	const { sidebarToggle } = useContext(SidebarContext);
	return (
		<Container open={sidebarToggle}>
			<Header><span>dashboard</span></Header>
			{SidebarItems.map((item) => {

				
				return <SidebarItem key={item.route} item={item} />
							})}
		</Container>
	);
};

const Container = styled.div`
	width: 25%;
	height: 85vh;
	position: -webkit-sticky;
	position: sticky;
	top: 15vh;
	background: #fff;
	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
	font-family: "Josefin Sans", sans-serif;
	display:block;
	z-index:10;
	
	a {
		text-decoration: none;
	}
	@media ${device.md} {
	width:40%;
}
 @media ${device.xs} {
	 	position:fixed;
	 	top:15vh;
        width: 60%;
        transition:.5s;
		left: ${(props) => (props.open ? "0" : "-100%")};}

		
`;
const Header=styled.div`
	padding:.8rem;
	font-size:.9rem;
	background:#003300BF;
	text-transform:uppercase;
	color:#fff;
	display: flex;
  justify-content: flex-start;
  cursor:pointer;
  align-items: center;
  &:hover{
  	background:#003300;
  }
  @media ${device.xs} {
	font-size:0.7rem;
}
`
// const SmallSidebarItem= styled(SidebarItem)`
// 	width:50%;
// `

export default Sidebar;
