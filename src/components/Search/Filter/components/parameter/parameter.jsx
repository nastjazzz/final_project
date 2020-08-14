import React from 'react';
import styles from './parameter.module.css';

function Parameter({t, value, onChange}) {
    return (
        <label className={styles.parameter} key={t}>
            <input
                type="checkbox"
                value={t}
                checked={value.includes(t)}
                onChange={onChange}
                className={styles.parameter__checkbox}
            />
            {t}
        </label>
    )
}

export default Parameter;
