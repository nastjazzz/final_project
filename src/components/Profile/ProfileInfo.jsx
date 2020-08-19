import React, {useState} from 'react'
import './profile.css'
import axios from 'axios';
import UploadFile from "./UploadFile";
// import dogPhoto from "../../../dogPhoto.jpg";
import defaultDogPhoto from '../../media/defaultDogPhoto.png';
// import UserInfo from "./components/UserInfo";
// import DogInfo from "./components/DogInfo";


const ProfileInfo = ({user, ...props}) => {
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
					<div className="info"> 
						<div className="dog__desc">
							<div className="dog__desc__content">
								<div className="dog__name">{user.pets.name}</div>
								<img src={user.pets.photo || './../../media/dogPhoto.jpg'} alt="pet photo" className="dog__photo" />
								<button className="send">Написать сообщение</button>
							</div>
						</div>
						<div className="desc">
							<div className="desc__content">
								<div className="info__wrapper">
									<div className="profile__subtitle">О питомце:</div>
									<div className="items__wrapper">
										<div className="item">Возраст: {user.pets.age}</div>
										<div className="item">Пол: {user.pets.gender}</div>
										<div className="item">Порода: {user.pets.breed}</div>
										<div className="item">Чаще всего гуляют в {user.location.district}, {user.location.city}</div>
									</div>
								</div>
								<div className="info__wrapper">
									<div className="profile__subtitle">Комментарий хозяина:</div>
									<div className="items__wrapper">
										<div className="item_mini">{user.pets.about}</div>
									</div>
								</div>
							</div>
							<div className="desc__content">
								<div className="info__wrapper">
									<div className="profile__subtitle">О хозяине:</div>
									<div className="items__wrapper">
										<div className="item">{user.firstName} {user.lastName}</div>
										<div className="item">Телефон: {user.telephone}</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					: null
			}
		</div>
	)
}
export default ProfileInfo


























