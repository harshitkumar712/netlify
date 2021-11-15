import React from 'react';

import styled from 'styled-components';

const Toggle=({isActive,setToggle})=>{
	return(
		<Wrapper isActive={isActive} onClick={()=>setToggle(prev=>!prev)}>
		<Notch isActive={isActive}/>
		<Text isActive={isActive}>{isActive?<span>OFF</span>:<span>ON</span>}</Text>
			
		</Wrapper>
		)
}

const Wrapper=styled.div`
cursor:pointer;
	width:40px;
	min-width:40px;
	height:16px;
	border-radius:20px;
	border:1.5px solid #000;
	/*margin:auto;*/
	display:flex;
    align-items:center;
	background:${props=>props.isActive?'#F00C0C':'#39DC36'};
	position:relative;
	margin-right:10px;
    
`
const Text= styled.div`
	color:#fff;
	font-family: "Josefin Sans", sans-serif;
	
	font-size:8px;
	margin:${props=>props.isActive?'auto auto auto 0':'auto 0 auto auto'};
	padding:0 2px;
`
const Notch=styled.div`
	height:20px;
	width:20px;
	border:1.5px solid #000;
	
	background:#fff;
	border-radius:50%;
	transition:transform .1s linear;
	position:absolute;
    transform:translate(${props=>props.isActive?'20px':'-2px'});
`


export default Toggle;