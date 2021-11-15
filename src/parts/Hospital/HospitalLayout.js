import React from 'react';
import Navbar from './navbar/Navbar';
import Sidebar from './sidebar/Sidebar';
import  {device} from '../../constants/mediaQueries';


import styled from 'styled-components';


const Content=styled.main`
	width: 75%;
	padding:2rem;
	@media ${device.sm} {
		width:100%;
	}
` 
const Wrapper= styled.div`
	display:flex;
`
const HospitalLayout=({children})=>{
return(
	<>
	<Navbar/>
	<Wrapper>
	<Sidebar/>
	<Content>
		{children}
	</Content>
	</Wrapper>
	</>
	)
}
export default HospitalLayout;