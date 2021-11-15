import React, { useState } from "react";
import styled from 'styled-components';
import Modal from './Modal';
import { Link } from 'react-router-dom';
import { device } from '../constants/mediaQueries';
import Popup from "reactjs-popup";


const HospitalRow = ({ hospital }) => {
	const [modal, setModal] = useState(false);

	let newDate = new Date(Date.now());
	const handleModal = () => {
		setModal(!modal);

	};

	const renderSwitch = (status) => {
		switch (status) {
			case 'pending':
				return (<Link to="/agent/registration"><Button>Request</Button></Link>);
				break;
			case 'processing':

				return (<Button disabled>Request Sent</Button>);
				break;
			case 'completed':
				return (<Button disabled>Registered</Button>);
				break;
		}
	}


	return (
		<>
			<Row>
				<td>{hospital.date} </td>
				<td>{hospital.pharmacy}</td>
				<td>{hospital.phone}</td>
				<td>{hospital.address}</td>
				{hospital.status !== "completed" ? <><td>{renderSwitch(hospital.status)}</td>
					<td>{hospital.status}</td></> : null}
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
				{hospital.status !== "completed" ? <td>
					{/* <Button onClick={handleModalAccess}>Access to</Button> */}

					<select
						id="access"
						name="access"
						style={{ padding: "5px", borderRadius: "10px", width: "100px" }}
					>
						<option value="1">rajsubramian iyer</option>
						<option value="2">rahul</option>
						<option value="3">roy</option>
					</select>
				</td> : null}
			</Row>
			<Modal open={modal} close={() => setModal(false)}>

				<input placeholder="Add any comment" type="text" /><br />
				<p>Hello this is testing<br /> <span style={{ color: "#003300" }}><b>-{newDate.toDateString()}</b></span></p>
				<p>Now it's live<br /><span style={{ color: "#003300" }}><b>-{newDate.toDateString()}</b></span></p>
				<button onClick={handleModal}>Comment</button>
			</Modal>

		</>
	);
};

const Row = styled.tr`
td{
	padding:10px;
}

@media ${device.md} {
		td{
			padding:0.6rem;
			font-size:0.8rem;
		}
		
		}

	background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 15px;
`
const Button = styled.button`
border:none;
color:#fff;
padding:5px 10px;
	background: ${p => p.theme.secondaryColor};
border-radius: 10px;
font-size:0.8rem;
&:disabled{
	pointer-events:none;
	background:#eee;
	color:#000;
}

`
export default HospitalRow;
