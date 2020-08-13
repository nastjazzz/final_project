import React from 'react';
import styles from './parameter.module.css';

function Parameter(props) {
    return (
        <label className={styles.parameter}>
            <input className={styles.parameter__checkbox} type="checkbox" name={props.name}/>
            {props.children}
        </label>
    )
}

export default Parameter;
