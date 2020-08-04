import React from 'react'
import './Form.css'
import Buttons from './Buttons'
import Login from './Login'
import { Route } from "react-router-dom";

const Auth = (props) => {

	//переменная для проверки и отображения верного поля логин или регистрация
	// const isLogin = props.match.path === "/login" ? true : false;


	return (
		<div className="main__form">
			<Buttons />
			<Route path='/login' component={Login} />
			<Route path='/registration' component={Login} />
		</div>
	)
}

export default Auth