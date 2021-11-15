import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import OutsideClickHandler from 'react-outside-click-handler';

const Dropdown = ({ title, items, multiSelect = false, name, setValues }) => {

	const [open, setOpen] = useState(false);
	const [selection, setSelection] = useState([]);
	useEffect(() => {
		setValues(prevValues => ({ ...prevValues, [name]: selection }));
	}, [selection, name, setValues])

	console.log(selection, name);
	const toggle = () => setOpen(!open);


	const handleClick = (item) => {
		if (!selection.some(current => current.id === item.id)) {
			if (!multiSelect) {
				setSelection([item]);
			}
			else if (multiSelect) {
				setSelection([...selection, item]);
			}

		}
		else {

			let newSelection = selection;
			newSelection = newSelection.filter(
				current => current.id !== item.id
			);
			setSelection([...newSelection]);
		}

	}
	const handleItemSelection = (item) => {
		if (selection.find(current => current.id === item.id)) {
			return true;
		}
		return false;
	}
	return (
		<OutsideClickHandler
			onOutsideClick={() => {
				setOpen(false)
			}}
		>
			<Wrapper onKeyPress={() => toggle(!open)} >
				<Container data-testid="dropdown-wrapper" onClick={() => toggle(!open)} onKeyPress={() => toggle(!open)}>

					<div className="title-container">{selection.length ? selection.map(item => (
						<span className="title-span" key={item.id}>{item.value}</span>
					)

					) : title}</div>
					<div>
						<div>{<i className={open ? 'fas fa-times' : "fas fa-chevron-down"}></i>}</div>
					</div>

				</Container>
				{open && (
					<Content>
						{items.map(item => (
							<li key={item.id}>
								<Item onKeyPress={() => handleClick(item)} data-testid={item.value} onClick={() => handleClick(item)}><span>{item.value}</span><span>{<i className={handleItemSelection(item) ? 'fas fa-check-square' : 'far fa-square'}></i>}</span></Item>
							</li>
						))}
					</Content>
				)

				}
			</Wrapper>
		</OutsideClickHandler>

	)
}

const Wrapper = styled.div.attrs({
	tabIndex: 0
})`
	width:100%;
	position:relative;
`
const Container = styled.div`
	border: 2px solid #003300;
	border-radius: 20px;
	font-family: "Lato", sans-serif;
	font-weight:400;
	padding:5px 10px;
	font-size:1rem;
	width:100%;
	text-transform:capitalize;
    display:flex;
    justify-content:space-between;
    
    cursor:default;
    .title-span{
    	color:#fff;
    	background:${props => props.theme.secondaryColor};
    	margin:2px 4px;
    	border-radius:5px;
    	padding:2px;
    }
    .title-container{
    	display:flex;
    	flex-wrap:wrap;
    }
`
const Content = styled.ul`
	 position: absolute;
  background-color: #fff;
width:100%;
font-family: "Lato", sans-serif;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 5px;
  z-index: 1;
  border:1px solid #000;
  list-style-type:none;
`
const Item = styled.div.attrs({
	tabIndex: 0
})`
 padding:1px;
	display:flex;
	justify-content:space-between;
	align-items:center;
    &:hover{
    	background:#3297FD;
    	color:#fff;
    	cursor:default;
    }
`
export default React.memo(Dropdown);

// export default Dropdown;