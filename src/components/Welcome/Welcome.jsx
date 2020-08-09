import React, {useState} from 'react'
// import Auth from './Form/Auth'
import './welcome.css'
// import "fontsource-roboto"
// import Input from "@material-ui/core/Input";
import axios from "axios";
// import {Typography} from '@material-ui/core';
import LoginForm from "./LoginForm";
import Title from "./Title";
import RegistrationForm from "./RegistrationForm";
import {NavLink} from "react-router-dom";
import { Route } from "react-router-dom";

const Welcome = () => {
	const [loginData, setLoginData] = useState({'currentLogin': '', 'currentPassword': ''})
	const [regData, setRegData] = useState({
		'firstName': '',
		'petsName': '',
		'petsAge': '',
		'login': '',
		'password': '',
		'password2': ''
	})

	let onSubmit = (e) => {
		e.preventDefault();
	}

	let onChangeLoginData = (e) => {
		if (e.target.name === 'login') {
			setLoginData({...loginData, 'currentLogin': e.target.value})
		} else if (e.target.name === 'password') {
			setLoginData({...loginData, 'currentPassword': e.target.value})
		} else if (e.target.name === 'firstName') {
			setRegData({...regData, firstName: e.target.value})
		} else if (e.target.name === 'petsName') {
			setRegData({...regData, petsName: e.target.value})
		} else if (e.target.name === 'reg_login') {
			setRegData({...regData, login: e.target.value})
		} else if (e.target.name === 'reg_password') {
			setRegData({...regData, password: e.target.value})
		} else if (e.target.name === 'reg_password2') {
			setRegData({...regData, password2: e.target.value})
		}
	}

	let putNewUserToServer = () => {
		axios.post('/api/registration/', regData)
			.then(response => {
				console.log('/api/registration/ response:::', response);
			})
	}
	let checkLoginData = () => {
		axios.post('/api/login/', loginData)
			.then(response => {
				console.log('/api/login/ response:::',response);
				//тут придет какой-то ответ  надо что-то придумать дальше
			})
	}

	return (
		<div className='wrapper'>
			<div className='main'>
				<Title/>
				<div className='auth__wrapper'>
					<div className='auth__buttons'>
						<div className='button__item'><NavLink to='/login'>Логин</NavLink></div>
						<div className='button__item'><NavLink to='/registration'>Регистрация</NavLink></div>
					</div>
					<form onChange={onChangeLoginData} onSubmit={onSubmit} className='form'>
						{/* Костыль path='/' ?? */}
						<Route path='/' exact render={() => <LoginForm
							loginData={loginData}
							checkLoginData={checkLoginData}/>}/>
						<Route path='/login' render={() => <LoginForm
							loginData={loginData}
							checkLoginData={checkLoginData}/>}/>
						<Route path='/registration' render={() => <RegistrationForm
							addNewUser={putNewUserToServer}
							regData={regData}/>}/>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Welcome;