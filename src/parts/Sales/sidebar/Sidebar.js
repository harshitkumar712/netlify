import React, { useContext } from "react";
import styled from "styled-components";
import { Link,useLocation } from "react-router-dom";
import DropItem from "./DropItem";
import { device } from "../../../constants/mediaQueries";
import { SidebarContext } from "../../../helpers/SidebarContext";
const SidebarItems = [
	{
		name: "Account",
		route: "/agent/account",
	},
	{
		name: "Request hospital registration",
		route: "/agent/registration",
	},
	{
		name: "Hospitals",
		subItems: [
			{ subname: "Registered Hospitals", route: "/agent/hospital/registered" },
			{
				subname: "Unregistered Hospitals",
				route: "/agent/hospital/unregistered",
			},
		],
		route: "/agent/hospital",	
	},
	{
		name: "Request pharmacy registration",
		route: "/agent/pharmacy/registration",
	},
	{
		name: "Pharmacies",
		subItems: [
			{ subname: "Registered Pharmacies", route: "/agent/pharmacies/registered" },
			{
				subname: "Unregistered Pharmacies",
				route: "/agent/pharmacies/unregistered",
			},
		],
		route: "/agent/pharmacies",
	},
];

const Sidebar = () => {
	const {pathname}=useLocation();
	const { sidebarToggle, handleSidebarToggle } = useContext(SidebarContext);
	console.log(sidebarToggle);
	
	return (
		<Container open={sidebarToggle}>
			{/* <Header><h3>Aodh Intelligence</h3></Header> */}
			{SidebarItems.map((item, index) => {
				if ("subItems" in item)
					return (
						<DropItem
							handleSidebarToggle={handleSidebarToggle}
							key={item.name}
							item={item}
							active={pathname.includes(item.route) }
						/>
					);
				else {
					return (
						<Link
							onClick={handleSidebarToggle}
							to={item.route}
							key={item.name}
						>
							<Item active={pathname === item.route}>
								<p>{item.name}</p>
								<i className="fas fa-chevron-right"></i>
							</Item>
						</Link>
					);
				}
			})}
		</Container>
	);
};

const Container = styled.div`
	width: 25%;
	height: calc(100vh - 90px);
	position: -webkit-sticky;
	position: sticky;
	top: 90px;
	background: #fff;
	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
	font-family: "Josefin Sans", sans-serif;
	display:block;
	z-index:10;
	
	a {
		text-decoration: none;
	}


	 @media ${device.xs} {
	 	position:fixed;
	 	top: 90px;
        width: 60%;
        transition:.5s;
		left: ${(props) => (props.open ? "0" : "-100%")};
}
		
`;
// const Header=styled.div`
// 	height:10%;
// 	background: rgba(0, 51, 0, 0.63);
// 	color:#fff;
//
// 	display: flex;
//   justify-content: center;
//   align-items: center;
// `;


const Item = styled.div`
	width: 100%;
	display: flex;
	p{
		font-size:1rem;
	}

	color: ${(props) => (props.active ? "#fff" : "#000")};
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
	/*transition: all 0.25s ease-in-out;*/
	background: ${(props) => (props.active ? "#003300" : "")};

	&:hover {
		cursor: pointer;
		background: #003300;
		color: #fff;
	}
`;

export default Sidebar;
