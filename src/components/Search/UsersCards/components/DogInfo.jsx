import React from "react";
import {NavLink} from "react-router-dom";
import {checkDogsAge} from "../../Help/checkDogsAge";

const DogInfo = ({id, age, dogName, photo}) => {
    return (
        <div className='pets-info'>
            <div className='pets-info__name'>
                <NavLink to={'/profile/' + id}>
                    <span className='link__name'>{dogName}, {checkDogsAge(age)}</span>
                </NavLink>
            </div>
            <div className='pets-info__photo'>
                <img src={photo} alt="user`s dog" />
            </div>
        </div>
    )
}

export default DogInfo;