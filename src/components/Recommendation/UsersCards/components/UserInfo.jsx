import React from "react";
import {NavLink} from "react-router-dom";

const UserInfo = ({id, userName, district}) => {
    return (
        <div className='user-info'>
            <div className='user-info__name'>
                <NavLink to={'/profile/' + id}> Хозяин: {userName} </NavLink>
            </div>
            <div className='user-info__location'>
                Гуляют в {district}
            </div>
        </div>
    )
}

export default UserInfo;