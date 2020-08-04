import React from 'react';
import styles from './avatar.module.css';

class Avatar extends React.Component {
    render() {
        return (
            <div className={styles.avatar__wrapper}>
                <img className={styles.avatar} src={this.props.source} />
            </div>
        );
    }
}

export default Avatar;
