import React from 'react'
import './profile.css'
import {Link} from "react-router-dom";

const ProfileInfoTest = ({user}) => {
	return (
		<div className="profile__component">
			{
				user.map(u => {
					return (
						<div>
							Имя: {u.firstName} <br/>
							Фамилия: {u.lastName}<br/>
							Кличка собаки: {u.pets.name}<br/>
							Возраст собаки: {u.pets.age}<br/>
							Чаще всего гуляют в {u.location.district}<br/>
						</div>
					)
				})
			}
			<Link to={'/profile/10'} >Check</Link>
		</div>
	)
}

export default ProfileInfoTest