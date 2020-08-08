import React from "react";

const LoginForm = ({loginData, onLoginDataChange})  => {
    //loginData = {currentLogin: '', currentPassword: ''}
    return (
        <>
            <input
                name='login'
                type='text'
                placeholder='Enter your login'
                value={loginData.currentLogin}
                className='input'
                onChange={(e) => onLoginDataChange(e)}
            />
            <input
                name='password'
                type='password'
                placeholder='Enter your password'
                className='input'
                value={loginData.currentPassword}
                onChange={(e) => onLoginDataChange(e)}

            />
        </>
    )
}

export default LoginForm;