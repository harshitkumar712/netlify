import React,{useState} from 'react';
import styled,{css} from 'styled-components';
import {Link} from 'react-router-dom';
import {device} from '../../../constants/mediaQueries';
import Toggle from '../../../components/hospital/Toggle';


const SidebarItem=({item})=>{
	console.log("render the SidebarItem")
const[toggle,setToggle]=useState(false);
	return(
		<Container>
           <Wrapper $small={item.small} 	>
            {item.small&&<div className="arrow">&#10143;</div>}
           <StyledLink to={item.route} $small={item.small} $toggle={toggle} >
           {item.name}</StyledLink>
           	

           </Wrapper>
           <i style={{margin:"0 2px"}} className="fas fa-plus-circle"></i>
           <Toggle isActive={toggle} setToggle={setToggle}/>
           </Container>
		)
}


const Container=styled.div`
	display:flex;
	justify-content:space-between;
	align-items:center;
`
const Wrapper=styled.div`
width: 75%;
	display: flex;
    
	justify-content: ${(props)=>(props.$small?"flex-end":"flex-start")};
	align-items: center;
	.arrow{
		font-size:2rem;
	}

`
const StyledLink=styled(Link)`
margin-top:.5rem;
	padding: .8rem;
width:100%;
color:#fff;
text-transform:uppercase;
background: ${(props) => (props.active ? "#003300" : "#003300BF")};
font-size:.8rem;
	${props=>props.$small&&css`
	text-transform:capitalize;
	
	width:75%;
	font-size:.8rem;

	`}
	${props=>props.$toggle&&css`
	 pointer-events: none;
    opacity: 0.8;
    background:#C4C4C4
;
    color:#000;

	`}
	@media ${device.xs} {
		font-size:0.7rem;
		padding:.6rem;
		}

	&:hover {
		cursor: pointer;
		background: #003300;
		color: #fff;
	}
`
export default SidebarItem;