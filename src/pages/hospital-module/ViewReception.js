import React from 'react';
import HospitalLayout from "../../parts/Hospital/HospitalLayout";
// import  {device} from '../../constants/mediaQueries';
import styled from "styled-components";
import profile from "../../assets/images/profile.png";


const ViewReception=()=>{
	return(
		<HospitalLayout>
			<Heading>Reception</Heading>
			<Wrapper>
			<Name>
			<p>1. Mr. Roshan</p>
				
				<p>2. Mr. Goswami</p>
			</Name>
			<Details>
					<table>
						<tbody>
							<tr>
								<td>Name</td>
								<td>Mr. Roshan</td>
							</tr>
							<tr>
								<td>Gender</td>
								<td>Male</td>
							</tr>
							<tr>
								<td>Date of birth</td>
								<td>01/12/1998</td>
							</tr>
							<tr>
								<td>Mobile</td>
								<td>9876543210</td>
							</tr>
							<tr>
								<td>Email Id</td>
								<td>abc@gmail.com</td>
							</tr>
							<tr>
								<td>Qualification</td>
								<td>B.Pharma</td>
							</tr>
							<tr>
								<td>Address</td>
								<td>Near hill station,Main Road</td>
							</tr>
						</tbody>
					</table>
					<SubDetail>
					<img src={profile} alt="profile" />
					<button className="freeze">
						Freeze
					</button>
					<button className="edit">
						Edit
					</button>
					</SubDetail>
				</Details>
				</Wrapper>
		</HospitalLayout>
		)
}

const SubDetail= styled.div`
	display:flex;

	flex-direction:column;
img {width:6rem;
	height:auto;
		padding: 1rem;
	}
	.freeze{
			font-family: "Josefin Sans", sans-serif;

background:#F00C0C;
border:none;
padding:5px 10px;
border-radius:5px;
margin:5px 0;
color:#fff;
font-size:1rem;
	}
	.edit{
			font-family: "Josefin Sans", sans-serif;

background:#C4C4C4;
border:none;
padding:5px ;
margin:5px 0;
border-radius:5px;
color:#000;
font-size:1rem;
	}
`
const Heading = styled.div`
	font-family: "Josefin Sans", sans-serif;
		font-weight: 700;
		text-transform: capitalize;
		font-size:1.2rem;
		text-align:center;
`
const Wrapper=styled.div`
	width:100%;
	justify-content:space-around;
	display:flex;
`
const Name= styled.div`
font-family: "Josefin Sans", sans-serif;
height:fit-content;
	background:#003300;
	padding:1rem;
	color:#fff;
	border-radius:10px;
	display:flex;
	flex-direction:column;
`
const Details = styled.div`
	background:#003300E5;
	color:#fff;
	border: 1px solid #000000;
	border-radius: 15px;
	font-family: "Josefin Sans", sans-serif;
	padding: 1rem;
	
display:flex;
	table{
		width:100%;
	}
	td {
		padding: 5px;
	}
	table td:first-child{
		font-weight:bolder;
	}
	table td:first-child:after{
    content:":";
    margin-left:10px;
    float:right;

	}

`;
export default ViewReception;