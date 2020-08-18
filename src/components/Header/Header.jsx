import React, {useEffect, useState} from 'react';
import styles from './Header.module.css';
import profileImg from './user.svg';

// Import components.
import Logo from './components/logo/logo';
import Avatar from './components/avatar/avatar';
import Dropdown from './components/dropdown/dropdown';

import UserInfo from './../../UserContext';

function Header(props) {
	const isUserAuth = props.userInfo;

	console.log(isUserAuth);

	return (
		<nav className={styles.nav}>
			<div className={`${styles.nav__wrapper} ${styles.flex__row}`}>
				<div className={styles.left__header}>
					<Logo />
				</div>
				{
					isUserAuth ?
						<div className={`${styles.profile__wrapper} ${styles.flex__row}`}>
							<Avatar source={`${profileImg}`}/>
							<Dropdown nickname={isUserAuth.firstName}/>
						</div>
						: null
				}
			</div>
		</nav>
	)
}

export default Header
