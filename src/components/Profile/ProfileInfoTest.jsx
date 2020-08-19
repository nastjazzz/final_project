import React, {useState} from 'react'
import './profile.css'
import UploadFile from "./UploadFile";
import BigPreloader from "../Preloader/BigPreloader";

const ProfileInfoTest = ({user, ...props}) => {
	// debugger;
	const currentUser = JSON.parse(localStorage.getItem('user')); //auth user

	const logout = () => {
		localStorage.removeItem('user');
		props.history.push('/login');
		window.location.reload();
	}

	return (
		<div className="profile__component">
			{
				user ?
					<div>
						Имя: {user.firstName} <br/>
						Фамилия: {user.lastName}<br/>
						Кличка собаки: {user.pets.name}<br/>
						Возраст собаки: {user.pets.age}<br/>
						Чаще всего гуляют в {user.location ? user.location.district : 'не указано'}<br/>

						<button onClick={logout}>Log out</button>
					</div>
					: null
			}
		</div>
	)
}

export default ProfileInfoTest