import React from 'react';
import styles from './profileMenu.module.css';

import Dropdown from './components/dropdown/dropdown';

class ProfileMenu extends React.Component {
    render() {
        return (
            <div className={styles.nickname}>
                {this.props.nickname}
                {/* <Dropdown /> */}
            </div>
        );
    }
}

export default ProfileMenu;
