
import  SalesLayout from '../../parts/Sales/layout/SalesLayout';
import React, { useState } from "react";
import styled from "styled-components";
import Dropdown from "../../components/Dropdown";
import { STATE_DATA } from "../../constants/states.js";
import { device } from "../../constants/mediaQueries";


const PharmacyPage=()=>{
	const [error, setError] = useState("");
	const [values, setValues] = useState({
		pharmacyName: "",
		pharmacistName: "",
		designation: "",
		gender: "male",
		address: "",
		city: "",
		district: "",
		state: "Telangana",
		ownerName: "",
		dob: "",
		pincode: "",
		email: "",
		mobileNo: "",
		altMobileNo: "",
		estYear: "",
		licenceNo: "",
		diagType: [],
	});
	const {
		pharmacyName,
		pharmacistName,
		designation,
		gender,
		address,
		city,
		district,
		state,
		ownerName,
		dob,
		pincode,
		email,
		mobileNo,
		altMobileNo,
		estYear,
		licenceNo,
		diagType,
	} = values;
	const disabled =
			pharmacyName.length&&
		pharmacistName.length&&
		designation.length&&
		gender.length&&
		address.length&&
		city.length&&
		district.length&&
		state.length&&
		ownerName.length&&
		dob.length&&
		pincode.length&&
		email.length&&
		mobileNo.length&&
		altMobileNo.length&&
		estYear.length&&
		licenceNo.length&&
		diagType.length;
	const handleChange = (e) => {
		setError("");
		const value = e.target.value;
		setValues({
			...values,
			[e.target.name]: value,
		});
		console.log(values);
	};
	const handleSubmit = (e) => {
		e.preventDefault();

		console.log(values);
		// if(!accredition.length||!specialization.length||!healthCareType.length)
		//   setError("Please Fill all the fields");
		//   else
		//   	console.log(values);
	};
	return(
		<SalesLayout>
			
			<Container>
			<Back>
				<i className="fas fa-chevron-left"></i>
			</Back>
			<Header>
				<h3>PHARMACY REGISTRATION</h3>
			</Header>
			<Form onSubmit={handleSubmit}>
				<Wrapper>
					<div>
						<label className="required" htmlFor="pharmacyName">
							Pharmacy Name
						</label>
						<Input
							id="pharmacyName"
							name="pharmacyName"
							value={pharmacyName}
							type="text"
							onChange={handleChange}
							required
						/>
					</div>
					<div>
						<label className="required" htmlFor="pharmacistName">
							Pharmacist Name
						</label>
						<Input
							id="pharmacistName"
							name="pharmacistName"
							value={pharmacistName}
							type="text"
							onChange={handleChange}
							required
						/>
					</div>
					<div>
						<label className="required" htmlFor="designation">
							Designation
						</label>
						<Input
							id="designation"
							name="designation"
							value={designation}
							type="text"
							onChange={handleChange}
							required
						/>
					</div>
					<div>
						<label className="required" htmlFor="gender">
							Gender
						</label>
						<Select
							id="gender"
							name="gender"
							value={gender}
							onChange={handleChange}
						>
							<option value="male">male</option>
							<option value="female">female</option>
							<option value="other">other</option>
						</Select>
					</div>

					<div className="address">
						<label className="required" htmlFor="address">
							Address
						</label>
						<Input
							type="text"
							name="address"
							id="address"
							value={address}
							onChange={handleChange}
							required
						/>
					</div>
					<div>
						<label className="required" htmlFor="city">
							City/Town
						</label>
						<Input
							type="text"
							id="city"
							name="city"
							value={city}
							onChange={handleChange}
							required
						/>
					</div>

					<div>
						<label className="required" htmlFor="district">
							District
						</label>
						<Input
							type="text"
							id="district"
							name="district"
							value={district}
							onChange={handleChange}
							required
						/>
					</div>

					<div>
						<label className="required" htmlFor="state">
							State
						</label>
						<Select
							name="state"
							id="state"
							value={state}
							onChange={handleChange}
						>
							{STATE_DATA.states.map((item) => {
								return (
									<React.Fragment key={item.state}>
										<option value={item.state}>
											{item.state}
										</option>
									</React.Fragment>
								);
							})}
						</Select>
					</div>

					<div>
						<label className="required" htmlFor="ownerName">
							Name of the owner
						</label>
						<Input
							type="text"
							id="ownerName"
							name="ownerName"
							value={ownerName}
							onChange={handleChange}
							required
						/>
					</div>

					<div>
						<label className="required" htmlFor="dob">
							Date of birth
						</label>
						<Input
							type="date"
							min="1990-05-11"
							max="2021-05-20"
							id="dob"
							name="dob"
							value={dob}
							onChange={handleChange}
							required
						/>
					</div>

					<div>
						<label className="required" htmlFor="pincode">
							Pincode
						</label>
						<Input
							type="text"
							id="pincode"
							name="pincode"
							value={pincode}
							onChange={handleChange}
							required
						/>
					</div>

					<div>
						<label className="required" htmlFor="email">
							Email Id
						</label>
						<Input
							type="email"
							id="email"
							name="email"
							value={email}
							onChange={handleChange}
							required
						/>
					</div>

					<div>
						<label className="required" htmlFor="mobileNo">
							Mobile number
						</label>
						<Input
							type="number"
							id="mobileNo"
							name="mobileNo"
							value={mobileNo}
							onChange={handleChange}
							required
						/>
					</div>

					<div>
						<label htmlFor="altMobileNo">Alternate Mobile</label>
						<Input
							type="number"
							id="altMobileNo"
							name="altMobileNo"
							value={altMobileNo}
							onChange={handleChange}
							required
						/>
					</div>

					<div>
						<label className="required" htmlFor="estYear">
							Established Year
						</label>
						<Input
							type="number"
							placeholder="YYYY"
							min="2017"
							max="2100"
							id="estYear"
							name="estYear"
							value={estYear}
							onChange={handleChange}
							required
						/>
					</div>

					<div>
						<label htmlFor="licenceNo">Licence Number</label>
						<Input
							type="number"
							id="licenceNo"
							value={licenceNo}
							name="licenceNo"
							onChange={handleChange}
							required
						/>
					</div>

					<div>
						<label className="required">
							Diagnostic Type
						</label>
						<Dropdown
							title="Select Type"
							items={diagnosticItems}
							setValues={setValues}
							name="diagType"
							multiSelect
						/>
					</div>

					<div className="submit">
						<span>{error}</span>
						<Submit disabled={!disabled} type="submit" value="submit" />
					</div>
				</Wrapper>
			</Form>
		</Container>
		
		</SalesLayout>
		
		)
}


const Container = styled.div`
	font-family: "Josefin Sans", sans-serif;
	
`;
const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 20px;
	.address {
		grid-column: 2/4;
		width: 100%;
	}
	.submit {
		span {
			color: red;
			display: block;
		}
		margin: 2rem 0;
		grid-column: 1/ 4;
		text-align: center;
	}
	.required:after {
		content: " *";
		color: red;
	}
	@media ${device.md} {
		display: grid;
		grid-template-columns: 1fr 1fr;
		.address {
			grid-column: 1/2;
			width: 100%;
		}
		.submit {
			grid-column: 1/3;
		}
	}
	@media ${device.sm} {
		display: grid;
		grid-template-columns: 1fr;
		.address {
			grid-column: 1/2;
			width: 100%;
		}
		.submit {
			grid-column: 1/2;
		}
	}
`;
const Form = styled.form`
	label {
		display: block;
		font-family: "Lato", sans-serif;
		font-weight: 700;
		color: #003300;
	}
`;
const Input = styled.input`
	border: 2px solid #003300;
	border-radius: 20px;
	font-family: "Lato", sans-serif;
	font-weight: 400;
	padding: 5px 10px;
	font-size: 1rem;
	width: 100%;
`;
const Select = styled.select`
	border: 2px solid #003300;
	border-radius: 20px;
	font-family: "Lato", sans-serif;
	font-weight: 400;
	padding: 5px 10px;
	font-size: 1rem;
	width: 100%;
	text-transform: capitalize;
`;

const Submit = styled.input.attrs({
	type: "submit",
	value: "Submit",
})`
	background: ${p=>p.theme.secondaryColor};
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 20px;
	border: none;
	color: #fff;
	padding: 1rem 2rem;
	font-size: 1rem;
	font-family: "Josefin Sans", sans-serif;
	&:disabled {
		pointer-events: none;
		opacity: 0.8;
		background: #c4c4c4;
		color: #000;
	}
`;
const Header = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 1rem;
`;
const Back = styled.button`
	border: none;
	background: #fff;
   position:absolute;
	font-size: 1.2rem;

	margin: 1rem;
	float: left;
	color: #1d1d1d;
	cursor: pointer;
`;

const diagnosticItems = [
	{ id: 1, value: "Radiology" },
	{ id: 2, value: "Biochemistry" },
	{ id: 3, value: "Pathology" },
	{ id: 4, value: "Orthology" },
	{ id: 5, value: "others" },
];


export default PharmacyPage;