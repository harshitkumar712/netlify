import React from 'react';
import {Link} from 'react-router-dom';

const Home = ()=>{
	return(
		<div>
		<h1>
			<Link to="/agent">Sales Module</Link><br/>
			<Link to="/hospital/admin">Hospital Module</Link>
			</h1>
		</div>
		)
}
export default Home;