import React, {useEffect, useState} from 'react'
import './profile.css'
import axios from "axios";
import {Redirect} from "react-router-dom";

const ProfileInfoTest = ({user}) => {

	const currentUser = JSON.parse(localStorage.getItem('user')); //auth user

	let userDataForProfileInfo = {}; //из этого объекта будут браться данные пользователя

	if (currentUser && user.length !== undefined || 0) {
		if (currentUser.id === user.id) {
			userDataForProfileInfo = currentUser;
			console.log('currentUser.id === user.id', userDataForProfileInfo);
		} else {
			userDataForProfileInfo = {...user};
			console.log('currentUser.id !== user.id', userDataForProfileInfo);
		}
	} else {
		userDataForProfileInfo = {...user};
		console.log('currentUser === null', userDataForProfileInfo);
	}

	const logout = () => {
		localStorage.removeItem('user');
		// <Redirect to={'/'} />
	}

	return (
		<div className="profile__component">
			<div>
				{
					userDataForProfileInfo ?
						<div>
							Имя: {userDataForProfileInfo.firstName} <br/>
							Фамилия: {userDataForProfileInfo.lastName}<br/>
							Кличка собаки: {userDataForProfileInfo.pets.name}<br/>
							Возраст собаки: {userDataForProfileInfo.pets.age}<br/>
							Чаще всего гуляют в {userDataForProfileInfo.location.district}<br/>
							<button onClick={logout}>Log out</button>
						</div>
						: null

				}
			</div>
		</div>
	)
}

export default ProfileInfoTest