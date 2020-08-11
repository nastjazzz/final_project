import React from 'react'
import './profile.css'
// import Users from "../CreateUser";



const ProfileInfo = (props) => {
	return (
		<div className="profile__component">
			{/* <Users /> */}
			<div className="profile">
				<div className="user__img">
					<img className="user__img user__image_main" src="https://jross.org/content/images/2018/08/peter-griffin-family-guy-cleft-chin-photo.jpg" alt="User photo" />
				</div>
				<div className="info">
					<p>Питер Гриффин</p>
					<p>33 года</p>
					<p>ЗАО</p>
					<div className="buttons__profile">
						<button class="button__profile"><span>Редактировать профиль</span></button>
						<button class="button__profile"><span>Написать сообщение</span></button>
					</div>
				</div>
				<div className="info__dog">
					<h2 className= "info__dog info__dog-title">Кто ходит на прогулку</h2>
					<div className="dog__profile">
						<div className="dog__description">
						<p className="dog__name">Брайан</p>
							<div>Мальчик</div>
							<div>3 года</div>
							<div>Лабрадор</div>
						</div>
						<div>
							<img className="dog__img" src="https://i.pinimg.com/236x/13/09/0c/13090cfeebd2228f19022bd34738a803--family-guy.jpg" alt="dog image"/>
						</div>
					</div>
					<h2 className= "info__dog info__dog-title">Где мы гуляем</h2>
					<div className="info__dog info__dog-map"></div>
				</div>
			<p></p>



			

			

			    


			</div>

		</div>
	)
}

export default ProfileInfo