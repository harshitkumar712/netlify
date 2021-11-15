import React from 'react';
import styled from 'styled-components';

const SearchBox= ()=>{
	return(
		<Container>
			<input type="text" placeholder="Search"/>
		</Container>
		)
}

const Container = styled.div`
	margin:0 1rem;
	input{
		background: #F5F5F5;
border: 1px solid #000000;
padding:5px 10px;
border-radius: 50px;
	}
`
export default SearchBox;