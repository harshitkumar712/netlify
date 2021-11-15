import React, { useState } from "react";
import styled from "styled-components";
import { Link ,useLocation} from "react-router-dom";

const DropItem = ({ item, active, handleSidebarToggle }) => {
	const {pathname}=useLocation();
	const [open, setOpen] = useState(active);
	const toggle = () => setOpen(!open);
	return (
		<>
			<Wrapper
				active={active}
				className="dropdown-wrapper"
				onClick={() => toggle(!open)}
				onKeyPress={() => toggle(!open)}
			>
				<p>{item.name}</p>
				<i
					className={
						open ? "fas fa-chevron-up" : "fas fa-chevron-right"
					}
				></i>
			</Wrapper>
			{open &&
				item.subItems.map((subitem) => (
					<Link
						onClick={handleSidebarToggle}
						to={subitem.route}
						key={subitem.subname}
					>
						<DropdownSubItem active={pathname === subitem.route}>
							<p>{subitem.subname}</p>
						</DropdownSubItem>
					</Link>
				))}
		</>
	);
};
const Wrapper = styled.div`
	width: 100%;

	display: flex;

	color: ${(props) => (props.active ? "#fff" : "#000")};
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
	background: ${(props) => (props.active ? "#003300" : "")};
	&:hover {
		cursor: pointer;
		background: #003300;
		color: #fff;
	}
`;
const DropdownSubItem = styled.div`
	padding:0.5rem 1rem;
	width: 100%;
	/*color: black;*/
	transition: all 0.25s ease-in-out;
color: ${(props) => (props.active ? props.theme.secondaryColor : "#000")};
	font-size:.95rem;
	text-decoration: none;
	background:#efefef;

	&:hover {
		color:${(props)=>props.theme.secondaryColor};
	}
`;
export default DropItem;
