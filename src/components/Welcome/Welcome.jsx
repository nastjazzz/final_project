import React, {useState} from 'react'
import axios from "axios";
import {NavLink, Route} from "react-router-dom";
import {history} from "../../index";

import './welcome.css'
import Title from "./Title";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";

const Welcome = ({setIsAuth}) => {
	const [loginData, setLoginData] = useState({'currentLogin': '', 'currentPassword': ''})
	const [regData, setRegData] = useState({
		'firstName': '',
		'petsName': '',
		'login': '',
		'password': '',
		'password2': ''
	})
	const [isAuthError, setIsAuthError] = useState(false);

	const onSubmit = (e) => {
		e.preventDefault();
	}

	const onChangeLoginData = (e) => {
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

	const putNewUserToServer = () => {
		axios.post('/api/registration/', regData)
			.then(response => {
				console.log('/api/registration/ response:::', response)
			})
	}

	const checkLoginData = () => {
		axios.post('/api/login/', loginData)
			.then(response => {
				// console.log('/api/login/ response:::',response);
				let data = response.data;
				// console.log('data::::',data);
				if (data[0] === true) {
					setIsAuthError(false)
					setIsAuth([true, data[1]]);
					history.push('/profile/'+data[1])
					// return <Redirect to={`/profile/${data[1]}`} />
				} else {
					console.log('ничего не меняем');
					setIsAuthError(true);
				}
			})
	}

	return (
		<div className='wrapper'>
				<div className='main'>
					<Title/>
					<div className='auth__wrapper'>
						{
							isAuthError ?
								<div className='error'>Некорректный логин и/или пароль</div> : null
						}
						<div className='auth__buttons'>
							<div className='button__item'><NavLink to='/login'>Логин</NavLink></div>
							<div className='button__item'><NavLink to='/registration'>Регистрация</NavLink></div>
						</div>
						<form onChange={onChangeLoginData} onSubmit={onSubmit} className='form'>
							{/* Костыль path='/' ?? */}
							<Route path='/' exact render={() => <LoginForm
								loginData={loginData}
								checkLoginData={checkLoginData}/>}/>
							<Route exact path='/login' render={() => <LoginForm
								loginData={loginData}
								checkLoginData={checkLoginData}/>}/>
							<Route exact path='/registration' render={() => <RegistrationForm addNewUser={putNewUserToServer}
								regData={regData}/>}/>
						</form>
					</div>
				</div>
		</div>
	)
}

export default Welcome;