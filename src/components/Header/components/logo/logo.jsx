import React from 'react';
import styles from './logo.module.css';

function Logo() {
    return (
        <div className={`${styles.logo__wrapper} ${styles.flex__row}`}>
            <div className={styles.logo__wrapper}>
                <div id={styles.text__logo}>MasterPet</div>
            </div>
        </div>
    );
}

export default Logo;
