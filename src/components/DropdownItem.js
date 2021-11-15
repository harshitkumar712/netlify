import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const DropdownItem = ({ item, active, toggleSidebar }) => {
	const [open, setOpen] = useState(false);
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
						onClick={toggleSidebar}
						to={subitem.route}
						key={subitem.subname}
					>
						<DropdownSubItem>
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
	color: black;
	transition: all 0.25s ease-in-out;

	font-size:.95rem;
	text-decoration: none;
	background:#efefef;

	&:hover {
		color: #0cb2b2;
	}
`;
export default DropdownItem;
