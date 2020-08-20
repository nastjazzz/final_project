import React from 'react';
import styles from './Header.module.css';
import profileImg, { ReactComponent } from './user.svg';

// Import components.
import Logo from './components/logo/logo';
import Avatar from './components/avatar/avatar';
import Dropdown from './components/dropdown/dropdown';

import UserInfo from './../../UserContext';

function Header (props) {
	return (
		<UserInfo.Consumer>{([authHash, setAuthHash]) => { return (
			<nav className={styles.nav}>
				<div className={`${styles.nav__wrapper} ${styles.flex__row}`}>
					<div className={styles.left__header}>
						<Logo />
					</div>
					{
						authHash ?
							<div className={`${styles.profile__wrapper} ${styles.flex__row}`}>
								<Avatar source={`${profileImg}`}/>
								<Dropdown nickname={authHash.firstName || 'Станислав'}/>
							</div>
							: null
					}
				</div>
			</nav>
		)}}</UserInfo.Consumer>
	)
}

export default Header
