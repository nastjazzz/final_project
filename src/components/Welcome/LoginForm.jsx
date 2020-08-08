import React from "react";

const LoginForm = ({loginData, checkCurrentLoginData, users})  => {
    // props.match.path === '/login' ? setIsReg(false) : setIsReg(true);
    //loginData = {currentLogin: '', currentPassword: ''}
    return (
        <>
            <input
                name='login'
                type='text'
                placeholder='Enter your login'
                value={loginData.currentLogin}
                className='input'
            />
            <input
                name='password'
                type='password'
                placeholder='Enter your password'
                className='input'
                value={loginData.currentPassword}
            />
            <div>
                <button onClick={() => checkCurrentLoginData(loginData, users)}>Войти</button>
            </div>
        </>
    )
}

export default LoginForm;