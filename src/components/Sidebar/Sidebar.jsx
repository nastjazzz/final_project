import React from 'react'
import cl from './sidebar.module.css'
import {NavLink} from "react-router-dom";

const Sidebar = () => {
	return (
		<div className={cl.wrapper}>
			<ul className={cl.list}>
				<li className={cl.list__item}>
					<NavLink to="/profile" activeClassName={cl.active}>Profile</NavLink>
				</li>
				<li className={cl.list__item}>
					<NavLink to="/messages" activeClassName={cl.active}>Messages</NavLink>
				</li>
				<li className={cl.list__item}>
					<NavLink to="/search" activeClassName={cl.active}>Search</NavLink>
				</li>
				<li className={cl.list__item}>
					<NavLink to="/settings" activeClassName={cl.active}>Settings</NavLink>
				</li>
			</ul>
		</div>
	)
}

export default Sidebar