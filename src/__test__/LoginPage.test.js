import React from "react";
import LoginPage from '../pages/login-page/LoginPage';
import { BrowserRouter as Router } from 'react-router-dom';


import {render,screen,fireEvent} from "@testing-library/react";


import "@testing-library/jest-dom/extend-expect";


test("Is login button rendering",()=>{
	const component = render(<Router><LoginPage/></Router>);
	const loginButton = screen.getByRole('button',{name:'LOGIN'});

expect(loginButton).toBeInTheDocument();
   

})

test("Is empty filed validation working",()=>{
	const component = render(<Router><LoginPage/></Router>);
	const loginButton = screen.getByRole('button',{name:'LOGIN'});
	const username = screen.getByLabelText('Enter Username');
	const password = screen.getByLabelText('Enter Password');
 fireEvent.click(loginButton);

	expect (screen.getByRole('alert')).toHaveTextContent('Please fill out all the field');

})

test("Is password validation working",()=>{
	const component = render(<Router><LoginPage/></Router>);
	const loginButton = screen.getByRole('button',{name:'LOGIN'});
	const username = screen.getByLabelText('Enter Username');
	const password = screen.getByLabelText('Enter Password');
	fireEvent.change(username, {target: {value: 'a'}})
	fireEvent.change(password, {target: {value: 'a'}})
 fireEvent.click(loginButton);

	expect (screen.getByRole('alert')).toHaveTextContent('Please enter a valid user id or password');

})