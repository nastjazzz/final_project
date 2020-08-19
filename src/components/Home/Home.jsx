import React from 'react'
import {Route} from "react-router-dom";

import './home.css'
import Title from "./components/Title";
import AuthButtons from "./components/AuthButtons";
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";
import Homepage from "../Homepage/homepage";

const Home = (props) => {
	//если что-то есть в localstorage
	const authUser = JSON.parse(localStorage.getItem('user'));

	return (
		<div>
			{
				!authUser ?
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
					: null
			}
			<Homepage />
		</div>
	)
}

export default Home;