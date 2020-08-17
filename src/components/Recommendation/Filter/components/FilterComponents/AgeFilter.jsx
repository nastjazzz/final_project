import React from "react";
import './filterComponents.css'

const AgeFilter = ({value, onChange}) => {
    return (
        //привести к одному стилю
        <div className='age-input__wrapper'>
            <input
                className='age-input'
                value={value[0]}
                onChange={onChange}
                data-index="0" />
            &nbsp;-&nbsp;
            <input
                className='age-input'
                value={value[1]}
                onChange={onChange}
                data-index="1" />
        </div>
    )
}

export default AgeFilter;