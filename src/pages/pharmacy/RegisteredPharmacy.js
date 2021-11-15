import React from 'react';
import styled from 'styled-components';
//import Sidebar from '../../parts/Sidebar';
// import Navbar from '../../parts/Navbar';
import SalesLayout from '../../parts/Sales/layout/SalesLayout';



import PharmacyRow from "../../components/PharmacyRow";
import { device } from "../../constants/mediaQueries";
import { PHARMACY_DATA } from "../../constants/PHARMACY_DATA";

const RegisteredPharmacy = () => {
	return (
		<SalesLayout>

			<Container>
				<Back>
					<i className="fas fa-chevron-left"></i>
				</Back>
				<Header>
					<h3>Registered pharmacies</h3>
				</Header>
				<Wrapper>
					<thead>
						<tr>
							<th>Initial date</th>
							<th>Pharmacy </th>
							<th>Name</th>
							<th>Telephone</th>
							<th>Address</th>
							{/* <th>Request Registration</th>
						<th>Status</th> */}
							<th>Comments</th>
							{/* <th>Access</th> */}
						</tr>
					</thead>
					<tbody>
						{PHARMACY_DATA.map((pharmacy) => {
							if (pharmacy.status === "completed")
								return <PharmacyRow pharmacy={pharmacy} />;
							else
								return null;

						})}
					</tbody>
				</Wrapper>
			</Container>

		</SalesLayout>
	)
}

const Container = styled.div`
	font-family: "Josefin Sans", sans-serif;

	overflow-x: auto;
`;
const Wrapper = styled.table`
	width: 95%;

	text-align: center;
	font-family: "Lato", sans-serif;
	font-weight: 700;
	th {
		padding: 5px;
		/*		background: #eee;
*/
		font-size: 1rem;
		color: #003300;
	}
	thead tr {
		border: 2px solid black;
	}
	@media ${device.md} {
		th {
			font-size: 0.8rem;
		}
	}
`;
const Header = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	text-transform: uppercase;
	margin: 1rem;
`;
const Back = styled.button`
	border: none;
	background: #fff;

	font-size: 1.2rem;

	margin: 1rem;
	float: left;
	color: #1d1d1d;
	cursor: pointer;
`;

export default RegisteredPharmacy;