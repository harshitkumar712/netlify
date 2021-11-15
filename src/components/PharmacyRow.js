import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";
import { Link } from "react-router-dom";
import { device } from "../constants/mediaQueries";
import Popup from "reactjs-popup";

const PharmacyRow = ({ pharmacy }) => {
	const [modal, setModal] = useState(false);
	const [modalAccess, setModalAccess] = useState(false);
	let newDate = new Date(Date.now());
	const handleModal = () => {
		setModal(!modal);
	};
	const handleModalAccess = () => {
		setModalAccess(!modal);
	};
	const renderSwitch = (status) => {
		switch (status) {
			case "pending":
				return (
					<Link to="/agent/pharmacy/registration">
						<Button>Request</Button>
					</Link>
				);
				break;
			case "processing":
				return <Button disabled>Request Sent</Button>;
				break;
			case "completed":
				return <Button disabled>Registered</Button>;
				break;
		}
	};

	return (
		<>
			<Row>
				<td>{pharmacy.date} </td>
				<td>{pharmacy.pharmacy}</td>
				<td>{pharmacy.name}</td>
				<td>{pharmacy.phone}</td>
				<td>{pharmacy.address}</td>

				{pharmacy.status !== "completed" ? <><td>{renderSwitch(pharmacy.status)}</td><td>{pharmacy.status}</td></> : null}
				{/* <td><Button onClick={handleModal} >Open</Button> */}
				<td>
					<Popup
						trigger={<Button>Open</Button>}
						position={["left center"]}
						closeOnDocumentClick
					>
						<div
							data-testid="comment-tooltip"
							style={{
								background: "white",
								padding: "5px",
								borderRadius: "5px",
								boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
								border: "2px solid #003300",
							}}
						>
							<input placeholder="Add any comment" type="text" />
							<br />
							<button
								style={{
									background: "#003300",
									color: "white",
									borderRadius: "5px",
									border: "none",
									paddding: "5px",
								}}
								onClick={handleModal}
							>
								Comment
							</button>
							<p>
								Hello this is testing
								<br />{" "}
								<span style={{ color: "#003300" }}>
									<b>-{newDate.toDateString()}</b>
								</span>
							</p>
							<p>
								Now it's live
								<br />
								<span style={{ color: "#003300" }}>
									<b>-{newDate.toDateString()}</b>
								</span>
							</p>

						</div>
					</Popup>
				</td>
				{(pharmacy.status !== "completed") ? <td>
					{/* <Button onClick={handleModalAccess}>Access to</Button> */}

					<select
						id="access"
						name="access"
						style={{ padding: "5px" }}
					>
						<option value="1">raj</option>
						<option value="2">rahul</option>
						<option value="3">roy</option>
					</select>
				</td> : null}
			</Row>
			<Modal open={modal} close={() => setModal(false)}>
				<input placeholder="Add any comment" type="text" />
				<br />
				<p>
					Hello this is testing
					<br />{" "}
					<span style={{ color: "#003300" }}>
						<b>-{newDate.toDateString()}</b>
					</span>
				</p>
				<p>
					Now it's live
					<br />
					<span style={{ color: "#003300" }}>
						<b>-{newDate.toDateString()}</b>
					</span>
				</p>
				<button onClick={handleModal}>Comment</button>
			</Modal>
			{/* <Modal open={modalAccess} close={()=>setModalAccess(false)}> */}
			{/* <div style={{display:"flex","flexDirection":"column",'alignItems':"center"}}> */}
			{/* 	<button >Antony</button> */}
			{/* 	<button >Rutherford</button> */}
			{/* 	<button >christiana</button> */}
			{/* 	<button >Robin</button> */}
			{/* 	<button >Ronald</button> */}
			{/* 	<button >Donald</button> */}
			{/* 	</div> */}
			{/* </Modal> */}
		</>
	);
};

const Row = styled.tr`
	td {
		padding: 10px;
	}

	@media ${device.md} {
		td {
			padding: 0.6rem;
			font-size: 0.8rem;
		}
	}

	background: #ffffff;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 15px;
`;
const Button = styled.button`
	border: none;
	color: #fff;
	padding: 5px 10px;
	background: ${(p) => p.theme.secondaryColor};
	border-radius: 10px;
	font-size: 0.8rem;
	&:disabled {
		pointer-events: none;
		color: black;
		background: #eee;
	}
`;
export default PharmacyRow;
