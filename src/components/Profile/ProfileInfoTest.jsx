import React, {useEffect, useState} from 'react'
import './profile.css'
import axios from "axios";

const ProfileInfoTest = ({user, id}) => {

	const currentUser = JSON.parse(localStorage.getItem('user')); //auth user
	// console.log('profileInfo currentUser=', currentUser)
	// const [user, setUser] = useState({}); //юзер. который придет при запросе на сервак
	// console.log('profileInfo user=',user)
	//из /api/profile/${id}

	// useEffect(() => {
	// 	axios.get(`/api/profile/${id}`)
	// 		.then(response => {
	// 			console.log('13:  RESP', response);
	// 			let data = response.data; //object с юзером
	// 			setUser(data);
	// 		})
	// }, [id]);

	let userDataForProfileInfo = {}; //из этого объекта будут браться данные пользователя

	// if (currentUser !== null) {
	// 	userDataForProfileInfo = currentUser;
	// 	console.log('currentUser!=null',userDataForProfileInfo);
	// } else if (currentUser !== null && currentUser.id !== user.id) {
	// 	userDataForProfileInfo = {...user};
	// }
	// else {
	// 	userDataForProfileInfo = {...user};
	// 	console.log('!currentUser==null',userDataForProfileInfo);
	// }
	if (currentUser && user.length !== undefined || 0) {
		debugger;
		if (currentUser.id === user.id) {
			userDataForProfileInfo = currentUser;
			console.log('currentUser.id === user.id',userDataForProfileInfo);
		} else {
			userDataForProfileInfo = {...user};
			console.log('currentUser.id !== user.id',userDataForProfileInfo);
		}
	} else {
		userDataForProfileInfo = {...user};
		console.log('currentUser === null',userDataForProfileInfo);
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
									</div>
									: null

							}
							{/*Имя: {userDataForProfileInfo && userDataForProfileInfo.firstName} <br/>*/}
							{/*Фамилия: {userDataForProfileInfo && userDataForProfileInfo.lastName}<br/>*/}
							{/*Кличка собаки: {userDataForProfileInfo && userDataForProfileInfo.pets.name}<br/>*/}
							{/*Возраст собаки: {userDataForProfileInfo && userDataForProfileInfo.pets.age}<br/>*/}
							{/*Чаще всего гуляют в {userDataForProfileInfo && userDataForProfileInfo.location.district}<br/>*/}
						</div>
			{/*		)*/}
			{/*	})*/}
			{/*}*/}
		</div>
	)
}

export default ProfileInfoTest