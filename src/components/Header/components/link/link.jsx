import React from 'react';
import styles from './link.module.css';

class Link extends React.Component {
    render() {
        return (
            <div className={styles.link__wrapper}>
                {this.props.title}
            </div>
        );
    }
}

export default Link;
