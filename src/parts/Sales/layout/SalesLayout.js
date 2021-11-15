import React from 'react';

import Sidebar from '../sidebar/Sidebar';
import { device } from '../../../constants/mediaQueries';
import Navbar from '../../Navbar';


import styled from 'styled-components';


const Content = styled.main`
	width: 75%;
	padding: 0 2rem;
	@media ${device.xs} {
		width:100%;
	}
`
const Wrapper = styled.div`
	display:flex;
`
const SalesLayout = ({ children }) => {
	return (
		<>
			<Navbar />
			<Wrapper>
				<Sidebar />
				<Content>
					{children}
				</Content>
			</Wrapper>
		</>
	)
}
export default SalesLayout;