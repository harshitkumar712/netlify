import React from 'react';
import {device} from '../../../constants/mediaQueries';
import styled from 'styled-components';

const NavbarItem=({name})=>{
	return(
		<Container>
			<h5>{name}</h5>
		</Container>
		)
}

const Container = styled.div`
	background: #C4C4C4;
border-radius: 10px;
margin:0 5px;
h5{
	color:#000;
	font-family: Josefin Sans;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
font-weight: bold;
padding:5px;
@media ${device.xs} {
		font-size:0.75rem;
		padding:2px;
		}

}
`
export default NavbarItem;