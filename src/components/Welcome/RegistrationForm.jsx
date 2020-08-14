import React from "react";

const RegistrationForm = ({regData, addNewUser}) => {
    return (
        <>
            <input value={regData.firstName} name='firstName' type='text' placeholder='Введите Ваше имя' />
            <input value={regData.petsName} name='petsName' type='text' placeholder='Введите кличку собаки' />
            <input name='reg_login' value={regData.login} type='text' placeholder='Придумайте логин' />
            <input name='reg_password' value={regData.password}type='password' placeholder='Придумайте пароль' />
            <input name='reg_password2' value={regData.password2}type='password' placeholder='Повторите пароль' />
            <div>
                <button className='button' type='submit' onClick={addNewUser}>Зарегистрироваться</button>
            </div>
        </>
    )
}

export default RegistrationForm;