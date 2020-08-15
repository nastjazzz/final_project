import React from 'react'
import {Route} from "react-router-dom";

import './welcome.css'
import Title from "./components/Title";
import AuthButtons from "./components/AuthButtons";
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";

const Welcome = (props) => {
	return (
		<div className='wrapper'>
			<div className='main'>
				<Title/>
				<div className='auth__wrapper'>
					<AuthButtons {...props} />
					<Route exact path={['/', '/login']} render={(props) => <LoginForm {...props}/>}/>
					<Route exact path='/registration' render={(props) => <RegistrationForm {...props}/>}/>
				</div>
			</div>
		</div>
	)
}

export default Welcome;