import React from 'react';
import styles from './Header.module.css';
import profileImg from './user.svg';

function Header() {
	return (
		<nav className={styles.nav}>
			<div className={`${styles.nav__wrapper} ${styles.flex__row}`}>
				<div className={styles.left__header}>
					<div className={`${styles.logo__wrapper} ${styles.flex__row}`}>
						<div className={styles.logo__wrapper}>
							<div id={styles.text__logo}>MasterPet</div>
						</div>
					</div>
					<div className={`${styles.menu__wrapper} ${styles.flex__row}`}>
						<div className={styles.link__wrapper}>
							Открыть
						</div>
						<div className={styles.link__wrapper}>
							Закрыть
						</div>
						<div className={styles.link__wrapper}>
							Узнать
						</div>
					</div>
				</div>
				<div className={`${styles.profile__wrapper} ${styles.flex__row}`}>
					<div className={styles.avatar__wrapper}>
						<img src={profileImg} />
					</div>
					<div className={styles.nickname}>Nickname</div>
				</div>
			</div>
		</nav>
	)
}

export default Header
