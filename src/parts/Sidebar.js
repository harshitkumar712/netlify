import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import DropdownItem from "../components/DropdownItem";
import { device } from "../constants/mediaQueries";
import { SidebarContext } from "../helpers/SidebarContext";
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
		route: "/hospitals",
	},
	{
		name: "Request pharmacy registration",
		route: "/agent/pharmacy",
	},
	{
		name: "Pharmacies",
		subItems: [
			{ subname: "Registered Pharmacies", route: "/agent/pharmacy/registered" },
			{
				subname: "Unregistered Pharmacies",
				route: "/agent/pharmacy/unregistered",
			},
		],
		route: "/pharmacies",
	},
];

const Sidebar = ({ indexValue }) => {
	const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);
	console.log(sidebarToggle);
	const [activeIndex] = useState(indexValue || 0);
	return (
		<Container open={sidebarToggle}>
			{/* <Header><h3>Aodh Intelligence</h3></Header> */}
			{SidebarItems.map((item, index) => {
				if ("subItems" in item)
					return (
						<DropdownItem
							toggleSidebar={toggleSidebar}
							key={item.name}
							item={item}
							active={index === activeIndex}
						/>
					);
				else {
					return (
						<Link
							onClick={toggleSidebar}
							to={item.route}
							key={item.name}
						>
							<SidebarItem active={index === activeIndex}>
								<p>{item.name}</p>
								<i className="fas fa-chevron-right"></i>
							</SidebarItem>
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
	 	top:15vh;
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


const SidebarItem = styled.div`
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
