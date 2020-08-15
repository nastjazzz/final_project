import React from 'react'
import {NavLink, Route} from "react-router-dom";

import './welcome.css'
import Title from "./components/Title";
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";

const Welcome = (props) => {
	return (
		<div className='wrapper'>
			<div className='main'>
				<Title/>
				<div className='auth__wrapper'>
					<div className='auth__buttons'>
						<div className='button__item'>
							<NavLink to='/login'>Логин</NavLink>
						</div>
						<div className='button__item'>
							<NavLink to='/registration'>Регистрация</NavLink>
						</div>
					</div>
					<Route exact path={['/', '/login']} render={(props) => <LoginForm {...props}/>}/>
					<Route exact path='/registration' render={(props) => <RegistrationForm {...props}/>}/>
				</div>
			</div>
		</div>
	)
}

export default Welcome;