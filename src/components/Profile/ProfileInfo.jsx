import React, {useState} from 'react'
import './profile.css'
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
					<div className="profile__component info"> 
						<div className="dog__desc">
							<h1 className="dog__name">{user.pets.name}</h1>
							<div className="dog__img">{user.pets.photo || defaultDogPhoto}</div>
							<button className="send">Написать сообщение</button>
						</div>
						<div className="desc">
							<div className="dog__main">
								<h3 className="profile__subtitle">О питомце:</h3>
								<div className ="item">Возраст: {user.pets.age}</div>
								<div className ="item">Пол:</div>
								<div className ="item">Порода:</div>
								<div className ="item">Чаще всего гуляют в</div>
								<div className="sep"></div>
								<h3 className="profile__subtitle">Комментарий хозяина:</h3>


							</div>
							<div className="user">
								<h3 className="profile__subtitle">О хозяине:</h3>
								<div className ="item">{user.firstName} {user.lastName}</div>
								<div className ="item">Телефон:</div>
							</div>
						</div>
						

						{/* <button className="logout" onClick={logout}>Log out</button> */}
					</div>
					: null
			}
		</div>
	)
}
export default ProfileInfo
























// import Users from "../CreateUser";



// const ProfileInfo = (props) => {
// 	return (
// 		<div className="profile__component">
// 			{/* <Users /> */}
// 			<div className="profile">
// 				<div className="user__img">
// 					<img className="user__img user__image_main" src="https://jross.org/content/images/2018/08/peter-griffin-family-guy-cleft-chin-photo.jpg" alt="User photo" />
// 				</div>
// 				<div className="info">
// 					<p>Питер Гриффин</p>
// 					<p>33 года</p>
// 					<p>ЗАО</p>
// 					<div className="buttons__profile">
// 						<button class="button__profile"><span>Редактировать профиль</span></button>
// 						<button class="button__profile"><span>Написать сообщение</span></button>
// 					</div>
// 				</div>
// 				<div className="info__dog">
// 					<h2 className= "info__dog info__dog-title">Кто ходит на прогулку</h2>
// 					<div className="dog__profile">
// 						<div className="dog__description">
// 						<p className="dog__name">Брайан</p>
// 							<div>Мальчик</div>
// 							<div>3 года</div>
// 							<div>Лабрадор</div>
// 						</div>
// 						<div>
// 							<img className="dog__img" src="https://i.pinimg.com/236x/13/09/0c/13090cfeebd2228f19022bd34738a803--family-guy.jpg" alt="dog image"/>
// 						</div>
// 					</div>
// 					<h2 className= "info__dog info__dog-title">Где мы гуляем</h2>
// 					<div className="info__dog info__dog-map"></div>
// 				</div>
// 			<p></p>



			

			

			    


// 			</div>

// 		</div>
// 	)
// }

