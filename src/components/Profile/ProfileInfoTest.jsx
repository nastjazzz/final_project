import React from 'react'
import './profile.css'

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
		</div>
	)
}

export default ProfileInfoTest