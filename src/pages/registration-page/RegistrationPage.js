import SalesLayout from '../../parts/Sales/layout/SalesLayout';

// import Navbar from '../../parts/Navbar';

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Dropdown from "../../components/Dropdown";
import { STATE_DATA } from '../../constants/states.js';
import { device } from '../../constants/mediaQueries';

const RegistrationPage = () => {
	const [error, setError] = useState("");
	const [districtData, setDistrictData] = useState([]);
	const [values, setValues] = useState({
		hospitalName: "",
		hospitalType: "private",
		accredition: [],
		healthCareType: [],
		hospitalRegistrationNo: "",
		subscriptionfee: "",
		status: "live",
		address: "",
		state: "Assam",
		district: "",
		specialization: [],
		city: "",
		village: "",
		pincode: "",
		estYear: "",
		ownerName: "",
		mobileNo: "",
		gender: "female",
		dob: "",
		nationality: "",
		primaryEmail: "",
		secondaryEmail: "",
		website: "",
		altMobileNo: "",
		receptionNo: "",
	});
	const {
		hospitalName,
		hospitalType,
		hospitalRegistrationNo,
		subscriptionfee,
		status,
		accredition,
		specialization,
		healthCareType,
		address,
		state,
		district,
		city,
		village,
		pincode,
		estYear,
		ownerName,
		mobileNo,
		gender,
		dob,
		nationality,
		primaryEmail,
		secondaryEmail,
		website,
		altMobileNo,
		receptionNo,
	} = values;
	const disabled =
		hospitalName.length &&
		hospitalType.length &&
		hospitalRegistrationNo.length &&
		subscriptionfee.length &&
		status.length &&
		accredition.length &&
		specialization.length &&
		healthCareType.length &&
		address.length &&
		state.length &&
		district.length &&
		city.length &&
		village.length &&
		pincode.length &&
		estYear.length &&
		ownerName.length &&
		mobileNo.length &&
		gender.length &&
		dob.length &&
		nationality.length &&
		primaryEmail.length &&
		secondaryEmail.length &&
		website.length &&
		altMobileNo.length &&
		receptionNo;


	useEffect(() => {
		if (!districtData.length) {
			setDistrictData(STATE_DATA.states[0].districts);
		} else {
			const currentState = STATE_DATA.states.filter(item => item.state === state);
			console.log(currentState)
			setDistrictData(currentState[0].districts)

		}

	}, [state])
	const handleChange = (e) => {
		setError("");
		const value = e.target.value;
		setValues({
			...values,
			[e.target.name]: value
		});
		console.log(values);
	}
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!accredition.length || !specialization.length || !healthCareType.length)
			setError("Please Fill all the fields");
		else
			console.log(values);
	}
	return (
		<SalesLayout>

			<Container>
				{/* <Back> */}
				{/* 	<i className="fas fa-chevron-left"></i> */}
				{/* </Back> */}
				<Header>
					<h3>HOSPITAL REGISTRATION</h3>
				</Header>
				<Form onSubmit={handleSubmit}>
					<Wrapper>
						<div>
							<label className="required" htmlFor="hospitalName">Hospital Name</label>
							<Input
								id="hospitalName"
								name="hospitalName"
								value={hospitalName}
								type="text"
								onChange={handleChange}
								required
							/>
						</div>
						<div>
							<label className="required" htmlFor="hospitalType">Hospital Type</label>
							<Select
								value={hospitalType}
								id="hospitalType"
								name="hospitalType"
								onChange={handleChange}
							>
								<option value="government">government</option>
								<option value="private">private</option>
							</Select>
						</div>
						<div>
							<label className="required" htmlFor="">Accredition</label>
							{/* <Select id="accredition" multiple size="1"> */}
							<Dropdown
								title="Select Accredition"
								name="accredition"
								items={accreditionItems}
								setValues={setValues}
								multiSelect
							/>

							{/* <option id='NABL'>NABL</option> */}
							{/* <option id='JCI'>JCI</option> */}
							{/* <option id='ISO'>ISO</option> */}
							{/* <option id='Others'>Others</option> */}
						</div>
						<div>
							<label className="required" htmlFor="">Health Care Provider Type</label>
							<Dropdown
								title="Select Type"
								items={healthCareTypeItems}
								name="healthCareType"
								setValues={setValues}
								multiSelect
							/>
						</div>
						<div>
							<label className="required" htmlFor="hospitalRegistrationNo">
								Hospital Registration number(HRN)
							</label>
							<Input
								type="text"
								value={hospitalRegistrationNo}
								name="hospitalRegistrationNo"
								id="hospitalRegistrationNo"
								onChange={handleChange}
								required
							/>
						</div>
						<div>
							<label className="required" htmlFor="subscriptionFee">Subscription Fee</label>
							<Input
								type="number"
								id="subscriptionFee"
								value={subscriptionfee}
								name="subscriptionfee"
								onChange={handleChange}
								required
							/>
						</div>
						<div>
							<label className="required" htmlFor="status">Status</label>
							<Select
								value={status}
								id="status"
								name="status"
								onChange={handleChange}
							>
								<option value="live">Live</option>
								<option value="testing">Testing</option>
							</Select>
						</div>
						<div className="address">
							<label className="required" htmlFor="address">Address</label>
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
							<label className="required" htmlFor="state">State</label>
							<Select name="state" id="state" value={state} onChange={handleChange}>
								{STATE_DATA.states.map(item => {
									return (
										<React.Fragment key={item.state}>
											<option value={item.state}>
												{item.state}
											</option>
										</React.Fragment>
									)
								})}
								{/* <option value="Andhra Pradesh">Andhra Pradesh</option> */}
								{/* <option value="Andaman and Nicobar Islands"> */}
								{/* 	Andaman and Nicobar Islands */}
								{/* </option> */}
								{/* <option value="Arunachal Pradesh"> */}
								{/* 	Arunachal Pradesh */}
								{/* </option> */}
								{/* <option value="Assam">Assam</option> */}
								{/* <option value="Bihar">Bihar</option> */}
								{/* <option value="Chandigarh">Chandigarh</option> */}
								{/* <option value="Chhattisgarh">Chhattisgarh</option> */}
								{/* <option value="Dadar and Nagar Haveli"> */}
								{/* 	Dadar and Nagar Haveli */}
								{/* </option> */}
								{/* <option value="Daman and Diu">Daman and Diu</option> */}
								{/* <option value="Delhi">Delhi</option> */}
								{/* <option value="Lakshadweep">Lakshadweep</option> */}
								{/* <option value="Puducherry">Puducherry</option> */}
								{/* <option value="Goa">Goa</option> */}
								{/* <option value="Gujarat">Gujarat</option> */}
								{/* <option value="Haryana">Haryana</option> */}
								{/* <option value="Himachal Pradesh"> */}
								{/* 	Himachal Pradesh */}
								{/* </option> */}
								{/* <option value="Jammu and Kashmir"> */}
								{/* 	Jammu and Kashmir */}
								{/* </option> */}
								{/* <option value="Jharkhand">Jharkhand</option> */}
								{/* <option value="Karnataka">Karnataka</option> */}
								{/* <option value="Kerala">Kerala</option> */}
								{/* <option value="Madhya Pradesh">Madhya Pradesh</option> */}
								{/* <option value="Maharashtra">Maharashtra</option> */}
								{/* <option value="Manipur">Manipur</option> */}
								{/* <option value="Meghalaya">Meghalaya</option> */}
								{/* <option value="Mizoram">Mizoram</option> */}
								{/* <option value="Nagaland">Nagaland</option> */}
								{/* <option value="Odisha">Odisha</option> */}
								{/* <option value="Punjab">Punjab</option> */}
								{/* <option value="Rajasthan">Rajasthan</option> */}
								{/* <option value="Sikkim">Sikkim</option> */}
								{/* <option value="Tamil Nadu">Tamil Nadu</option> */}
								{/* <option value="Telangana">Telangana</option> */}
								{/* <option value="Tripura">Tripura</option> */}
								{/* <option value="Uttar Pradesh">Uttar Pradesh</option> */}
								{/* <option value="Uttarakhand">Uttarakhand</option> */}
								{/* <option value="West Bengal">West Bengal</option> */}
							</Select>
						</div>
						<div>
							{/* <label className="required" htmlFor="district">District</label>
							<Input
								type="text"
								id="district"
								name="district"
								value={district}
								onChange={handleChange}
								required
							/> */}
							<label className="required" htmlFor="district">District</label>
							<Select name="district" id="district" value={district} onChange={handleChange}>
								{districtData.length && districtData.map(item => {
									return (
										<React.Fragment key={item}>
											<option value={item}>
												{item}
											</option>
										</React.Fragment>
									)
								})}
							</Select>
						</div>
						<div>
							<label className="required" htmlFor="">Specialization</label>
							<Dropdown
								title="Select Specialization"
								items={specializationItems}
								setValues={setValues}
								name="specialization"
								multiSelect
							/>
						</div>
						<div>
							<label className="required" htmlFor="city">City/Town</label>
							<Input type="text" id="city" name="city" value={city} onChange={handleChange} required />
						</div>
						<div>
							<label className="required" htmlFor="village">Village</label>
							<Input
								type="text"
								id="village"
								name="village"
								value={village}
								onChange={handleChange}
								required
							/>
						</div>
						<div>
							<label className="required" htmlFor="pincode">Pincode</label>
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
							<label className="required" htmlFor="estYear">Established Year</label>
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
							<label className="required" htmlFor="ownerName">Name of the owner</label>
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
							<label className="required" htmlFor="mobileNo">Mobile number</label>
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
							<label className="required" htmlFor="">Gender</label>
							<Select id="gender" name="gender" value={gender} onChange={handleChange} >
								<option value="male">male</option>
								<option value="female">female</option>
								<option value="other">other</option>
							</Select>
						</div>
						<div>
							<label className="required" htmlFor="">Date of birth</label>
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
							<label className="required" htmlFor="nationality">Nationality</label>
							<Input
								type="text"
								id="nationality"
								name="nationality"
								value={nationality}
								onChange={handleChange}
								required
							/>
						</div>
						<div>
							<label className="required" htmlFor="primaryEmail">Primary Email ID</label>
							<Input
								type="email"
								id="primaryEmail"
								name="primaryEmail"
								value={primaryEmail}
								onChange={handleChange}
								required
							/>
						</div>
						<div>
							<label htmlFor="secondaryEmail">Secondary Email ID</label>
							<Input
								type="email"
								id="secondaryEmail"
								name="secondaryEmail"
								value={secondaryEmail}
								onChange={handleChange}
								required
							/>
						</div>
						<div>
							<label htmlFor="website">Website</label>
							<Input
								type="text"
								id="website"
								name="website"
								value={website}
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
							<label htmlFor="receptionNo">Reception Number</label>
							<Input
								type="number"
								id="receptionNo"
								value={receptionNo}
								name="receptionNo"
								onChange={handleChange}
								required
							/>
						</div>
						<div>
							<label htmlFor="hospital-logo">Hospital Logo</label>
							<Input type="file" id="hospital-logo" />

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
	.submit{
		span{
			color:red;
			display:block;
		}
		margin:2rem 0;
		grid-column:1/ 4;
		text-align:center;
	}
	.required:after {
    content:" *";
    color: red;
  }
	@media ${device.md} {
		
		display:grid;
		grid-template-columns:1fr 1fr;
		.address {
		
		grid-column: 2/3;
		width: 100%;
	}
	.submit{
			grid-column:1/3;
		}
	}
	@media ${device.sm} {
		
		display:grid;
		grid-template-columns:1fr;
		.address {
		
		grid-column: 1/2;
		width: 100%;
	}
	.submit{
			grid-column:1/2;
		}
	}
`
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
	type: 'submit',
	value: 'Submit'
})`
 background: ${p => p.theme.secondaryColor};
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

	font-size: 1.2rem;

	margin: 1rem;
	float: left;
	color: #1d1d1d;
	cursor: pointer;
`;

const accreditionItems = [
	{ id: 1, value: "NABH" },
	{ id: 2, value: "NABL" },
	{ id: 3, value: "JCI" },
	{ id: 4, value: "ISO" },
	{ id: 5, value: "others" },
];
const specializationItems = [
	{ id: 1, value: "Cardiology" },
	{ id: 2, value: "Orthology" },
	{ id: 3, value: "Pediatric" },
	{ id: 4, value: "Gynaecology" },
	{ id: 5, value: "Gastroenterology" },
	{ id: 6, value: "Diabetology" },
	{ id: 7, value: "Oncology" },
	{ id: 8, value: "Psychology" },
	{ id: 9, value: "Nephrology" },
	{ id: 10, value: "Neurology" },
	{ id: 11, value: "Pathology" },
	{ id: 12, value: "Ophthalmology" },
	{ id: 13, value: "ENT" },
	{ id: 14, value: "Dentist" },
	{ id: 15, value: "Dermatology" },
	{ id: 16, value: "Pshychiatry" },
	{ id: 17, value: "Radiology" },
	{ id: 18, value: "Dietitian/Nutrition" },
];
const healthCareTypeItems = [
	{ id: 1, value: "Multispeciality" },
	{ id: 2, value: "Super speciality" },
	{ id: 3, value: "Dispensary" },
	{ id: 4, value: "Community Health Centre" },
	{ id: 5, value: "Nursing Home" },
	{ id: 6, value: "Medical College/Institute" },
	{ id: 7, value: "Sub Centre" },
	{ id: 8, value: "Poly Clinic" },
	{ id: 9, value: "Primary Health Centre" },
	{ id: 10, value: "Clinic" },
	{ id: 11, value: "Others" },
];

export default RegistrationPage;