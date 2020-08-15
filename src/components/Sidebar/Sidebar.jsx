import React from 'react'
import cl from './sidebar.module.css'
import {NavLink} from "react-router-dom";

const Sidebar = () => {
	const isAuthUser = JSON.parse(localStorage.getItem('user'));
	//либо null, либо object

	return (
		<div className={cl.wrapper}>
			{
				isAuthUser ?
					<ul className={cl.list}>
						<li className={cl.list__item}>
							<NavLink to={`/profile/${isAuthUser.id}`} activeClassName={cl.active}>Профиль</NavLink>
						</li>
						<li className={cl.list__item}>
							<NavLink to="/profile/messages" activeClassName={cl.active}>Сообщения</NavLink>
						</li>
						<li className={cl.list__item}>
							<NavLink to="/search" activeClassName={cl.active}>Рекомендации</NavLink>
						</li>
						<li className={cl.list__item}>
							<NavLink to="/profile/settings" activeClassName={cl.active}>Настройки</NavLink>
						</li>
					</ul>
					: null
			}
		</div>
	)
}

export default Sidebar