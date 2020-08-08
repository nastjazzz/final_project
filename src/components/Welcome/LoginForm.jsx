import React from "react";

const LoginForm = ({loginData, checkLoginData})  => {
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
                {/*<button onClick={() => checkCurrentLoginData(loginData, users)}>Войти</button>*/}
                <button onClick={checkLoginData}>Войти</button>
            </div>
        </>
    )
}

export default LoginForm;