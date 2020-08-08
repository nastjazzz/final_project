import React, {useEffect, useState} from 'react'
// import Auth from './Form/Auth'
import './welcome.css'
// import "fontsource-roboto"
// import Auth from "./Form/Auth";
// import Input from "@material-ui/core/Input";
import axios from "axios";
// import {Typography} from '@material-ui/core';
import LoginForm from "./LoginForm";
import Title from "./Title";
import RegistrationForm from "./RegistrationForm";
import {NavLink} from "react-router-dom";
import { Route } from "react-router-dom";

const Welcome = () => {
	const [state, setState] = useState({  });
	const [loginData, setLoginData] = useState({'currentLogin': '', 'currentPassword': ''})
	const [regData, setRegData] = useState({
		'firstName': '',
		'petsName': '',
		'petsAge': '',
		'login': '',
		'password': '',
		'password2': ''
	})

//хук срабатывает сразу после окончания отрисовки dom
	useEffect(() => {
		axios.get('/api/users/')
			.then(resp => {
				let data = resp.data.users; //получаем пол-лей с сервера
				console.log('useEffect сработал 1 раз', resp);
				setState({...state, "users": data, "totalUsers": data.length})
			})
			.catch(err => console.log('err', err))
	}, []);

	let onChangeLoginData = (e) => {
		// console.log('onChangeLoginData', e.target.name)
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
 		// console.log(loginData);
	}

	let putNewUserToServer = () => {
		let newUser = regData;
		newUser.id = state.totalUsers + 1;
		console.log('new user', newUser);
		axios.post('/api/registration/', newUser)
			.then(response => {
				console.log('post response:::', response);
				setState({...state,
					users: [...state.users, regData],
					totalUsers: state.users.length + 1,
				})
			})
	}

	let showState = () => console.log('state.users', state)
	let onSubmit = (e) => {
		e.preventDefault();
		console.log('e.target', e.target);
	}

// функция проверяет есть ли у пользователя на сервере такой логин
// если возвращается массив с одним элементом, значит все ок
// если вернется массив пустой, значит нет такого логина или неправильный пароль
// может возвращаться массив из нескольких элементов - тут надо решать вопрос
// связанный с регистрацией, то есть чтобы при регистрации не было возможности отправить
// форму с логином, который уже есть у пользователя на сервере

	let checkCurrentLoginData = (loginData, users) => {
		let userObject = users.filter(user => {
			if (loginData.currentLogin === user.login) {
				if (loginData.currentPassword === user.password) {
					return true;
				}
			} else {
				return false;
			}
		})
		userObject.length === 1 ? console.log('корректный логин/пароль') : console.log('нет такого')
		// надо придумать что-то, что изменится, если придет 1 элемент
		// и с помощью этого 1 элемента открыть профиль пользователя
	}

//или сделать так, чтобы это проверка шла на стороне сервера, а не в компоненте ??

	return (
		<div className='wrapper'>
			<div className='main'>
				<Title/>
				<div>
					<div>
						<NavLink to='/login'>Логин</NavLink>
						<NavLink to='/registration'>Регистрация</NavLink>
					</div>
					{/*<Auth />*/}
					<form onChange={onChangeLoginData} onSubmit={onSubmit} className='form'>
						<Route path='/login' render={() => <LoginForm
							loginData={loginData}
							checkCurrentLoginData={checkCurrentLoginData}
							users={state.users}/>}/>

						<Route path='/registration' render={() => <RegistrationForm
							addNewUser={putNewUserToServer}
							regData={regData}/>}/>
					</form>
				</div>
				{/*<div>*/}
					{/*<button onClick={showState}>Show state</button>*/}
				{/*</div>*/}
			</div>
		</div>
	)
}

export default Welcome;