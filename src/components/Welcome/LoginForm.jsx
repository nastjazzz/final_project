import React from "react";

const LoginForm = ({loginData, checkLoginData})  => {
    return (
        <>
            <input
                name='login'
                type='text'
                placeholder='Введите логин'
                value={loginData.currentLogin}
                className='input'
            />
            <input
                name='password'
                type='password'
                placeholder='Введите пароль'
                className='input'
                value={loginData.currentPassword}
            />
            <div>
                <button className='button' onClick={checkLoginData}>Войти</button>
            </div>
        </>
    )
}

export default LoginForm;