import React, { useState } from "react";

import styled from "styled-components";
import profile from "../../assets/images/profile.png";
import HospitalLayout from "../../parts/Hospital/HospitalLayout";
import  {device} from '../../constants/mediaQueries';


const AddManager = () => {
	const [values, setValues] = useState({
		name: "",
		gender: "male",
		dob: "",
		mobileNo: "",
		email: "",
		qualification: "",
		address: "",
		experience: "",
	});

	const {
		name,
		gender,
		dob,
		mobileNo,
		email,
		qualification,
		address,
		experience,
	} = values;
	const disabled =
		name.length &&
		gender.length &&
		dob.length &&
		mobileNo.length &&
		email.length &&
		qualification.length &&
		address.length &&
		experience.length;
	const handleSubmit = (e) => {
		e.preventDefault();
	};

	const handleChange = (e) => {
		const value = e.target.value;
		setValues({
			...values,
			[e.target.name]: value,
		});
		console.log(values);
	};

	const photoInput = React.useRef(null);
	const handleInputClick = (e) => {
		e.preventDefault();
		photoInput.current.click();
	};
	const handlePhotoChange = (event) => {
		const fileUploaded = event.target.files[0];
		console.log(fileUploaded);
	};
	return (
		<HospitalLayout>
			<Header>
				<h3>add manager</h3>
			</Header>
			<Form onSubmit={handleSubmit}>
				<div>
					<label className="required" htmlFor="name">
						Name
					</label>
					<input
						id="name"
						name="name"
						value={name}
						type="text"
						onChange={handleChange}
						required
					/>
				</div>
				<div className="update-photo">
					<img src={profile} alt="profile" />
					<button type="button" onClick={handleInputClick}>
						Update Photo
					</button>
					<input
						type="file"
						ref={photoInput}
						style={{ display: "none" }}
						onChange={handlePhotoChange}
					/>
				</div>
				<div>
					<label className="required" htmlFor="">
						Gender
					</label>
					<select
						id="gender"
						name="gender"
						value={gender}
						onChange={handleChange}
					>
						<option value="male">male</option>
						<option value="female">female</option>
						<option value="other">other</option>
					</select>
				</div>
				<div>
					<label className="required" htmlFor="">
						Date of birth
					</label>
					<input
						type="date"
						id="dob"
						name="dob"
						value={dob}
						onChange={handleChange}
						required
					/>
				</div>
				<div>
					<label className="required" htmlFor="qualification">
						Qualification
					</label>
					<input
						id="qualification"
						name="qualification"
						value={qualification}
						type="text"
						onChange={handleChange}
						required
					/>
				</div>
				<div>
					<label className="required" htmlFor="mobileNo">
						Mobile
					</label>
					<input
						type="number"
						id="mobileNo"
						name="mobileNo"
						value={mobileNo}
						onChange={handleChange}
						required
					/>
				</div>
				<div>
					<label className="required" htmlFor="address">
						Address
					</label>
					<input
						id="address"
						name="address"
						value={address}
						type="text"
						onChange={handleChange}
						required
					/>
				</div>
				<div>
					<label className="required" htmlFor="email">
						Email
					</label>
					<input
						type="email"
						id="email"
						name="email"
						value={email}
						onChange={handleChange}
						required
					/>
				</div>

				<div>
					<label className="required" htmlFor="experience">
						Experience
					</label>
					<input
						id="experience"
						name="experience"
						value={experience}
						type="text"
						onChange={handleChange}
						required
					/>
				</div>
				<div className="submit">
					<Submit disabled={!disabled}>Submit</Submit>
				</div>
			</Form>
		</HospitalLayout>
	);
};

export default AddManager;

const Submit = styled.button`
	cursor: pointer;
	background: #003300;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 10px;
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

const Header = styled.header`
	h3 {
		font-family: "Josefin Sans", sans-serif;
		font-weight: 700;
		text-transform: capitalize;
	}
`;
const Form = styled.form`
	margin: 1rem 0;
	display: grid;
	grid-gap: 20px;

	grid-template-columns: 1fr 1fr;

	label {
		display: block;
		font-family: "Lato", sans-serif;
		font-weight: 700;
		color: #333333;
	}

	input,
	select {
		border: none;
		background: #efefef;
		border-radius: 9px;
		font-family: "Lato", sans-serif;
		font-weight: 400;
		padding: 10px;
		font-size: 1rem;
		width: 100%;
	}
	.submit {
		margin: 0 auto;
		grid-column: 1/3;
	}
	.required:after {
		content: " *";
		color: red;
	}
	.update-photo {
		grid-row: 1/3;
		grid-column: 2/3;
		display: flex;
		justify-content: center;
		align-items: center;
		img {
			width: 5rem;
			height: auto;
			margin: 0 1rem;
		}
		button {
			color: #003300;
			border-radius: 6px;
			filter: drop-shadow(2px 1px 4px #005387);
			padding: 0.5rem;
			font-family: "Lato", sans-serif;
			font-weight: 600;
			cursor: pointer;
			background: #fff;
			border: none;
			width: 50%;
			font-size: 1rem;
		}
	}

	@media ${device.sm} {
		
		display:grid;
		grid-template-columns:1fr;
		.update-photo {
		
		grid-column: 1/2;
	}
	.submit{
			grid-column:1/2;
		}
	}
`;
