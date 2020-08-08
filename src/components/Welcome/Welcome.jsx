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



const Welcome = () => {

	const [state, setState] = useState({  });
	const [loginData, setLoginData] = useState({'currentLogin': '', 'currentPassword': ''})

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
		if (e.target.name === 'login') {
			setLoginData({...loginData, 'currentLogin': e.target.value})
		} else if (e.target.name === 'password') {
			setLoginData({...loginData, 'currentPassword': e.target.value})
		}
		console.log(loginData);
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


	return (
		<div className='wrapper'>
			<div className='main'>
				<Title/>
				{/*<Auth />*/}
				<form onChange={onChangeLoginData} onSubmit={onSubmit}>
					<LoginForm
						loginData={loginData}
						setLoginData={setLoginData}
						onLoginDataChange={onChangeLoginData} />
					<button onClick={() => checkCurrentLoginData(loginData, state.users)}>Войти</button>
				</form>
				<button onClick={showState}>Show state</button>
			</div>
		</div>
	)
}

export default Welcome;