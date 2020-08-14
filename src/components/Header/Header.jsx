import React from 'react';
import styles from './Header.module.css';
import profileImg from './user.svg';

// Import components.
import Logo from './components/logo/logo';
import Link from './components/link/link';
import Avatar from './components/avatar/avatar';
import Dropdown from './components/dropdown/dropdown';

function Header() {
	const isUserAuth = localStorage.getItem('user');

	return (
		<nav className={styles.nav}>
			<div className={`${styles.nav__wrapper} ${styles.flex__row}`}>
				<div className={styles.left__header}>
					<Logo />
					{
						isUserAuth ?
							<div className={`${styles.menu__wrapper} ${styles.flex__row}`}>
								<Link title='Открыть' link='open'/>
								<Link title='Закрыть' link='close'/>
								<Link title='Узнать' link='investigate'/>
								<Link title='Найти питомца' link='seqrch'/>
							</div>
							: null
					}
				</div>
				{
					isUserAuth ?
						<div className={`${styles.profile__wrapper} ${styles.flex__row}`}>
							<Avatar source={`${profileImg}`}/>
							<Dropdown nickname={'Nickname'}/>
						</div>
						: null
				}
			</div>
		</nav>
	)
}

export default Header
