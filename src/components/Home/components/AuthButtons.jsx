import {NavLink} from "react-router-dom";
import React from "react";
import './components.css'

const AuthButtons = ({...props}) => {
    const loginClass = props.location.pathname === '/login' ? "activeBlock" : "";
    const regClass = props.location.pathname === '/registration' ? "activeBlock" : "";

    return (
        <div className='auth__buttons'>
            <div className={`button__item ${loginClass}`} >
                <NavLink to='/login'>Логин</NavLink>
            </div>
            <div className={`button__item ${regClass}`} >
                <NavLink to='/registration'>Регистрация</NavLink>
            </div>
        </div>
    )
}

export default AuthButtons;
