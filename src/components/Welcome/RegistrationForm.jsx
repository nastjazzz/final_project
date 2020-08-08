import React from "react";

const RegistrationForm = ({regData, addNewUser}) => {
    return (
        <>
            <input value={regData.firstName} name='firstName' type='text' placeholder='Введите Ваше имя' />
            <input value={regData.petsName} name='petsName' type='text' placeholder='Введите кличку собаки' />
            {/*<div>Возраст питомца:*/}
            {/*    <select name='age' size='0' className='select'>*/}
            {/*        <option value='1'>меньше 1 года</option>*/}
            {/*        <option value='1-3'>от 1 года до 3 лет</option>*/}
            {/*        <option value='1-3'>от 3 лет до 8 лет</option>*/}
            {/*        <option value='1-3'>больше 8 лет</option>*/}
            {/*    </select>*/}
            {/*</div>*/}
            <input name='reg_login' value={regData.login} type='text' placeholder='Придумайте логин' />
            <input name='reg_password' value={regData.password}type='password' placeholder='Придумайте пароль' />
            <input name='reg_password2' value={regData.password2}type='password' placeholder='Повторите пароль' />
            <div>
                <button type='submit' onClick={addNewUser}>Зарегистрироваться</button>
            </div>
        </>
    )
}

export default RegistrationForm;