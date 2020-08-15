import React, {useState} from "react";
import axios from "axios";

const RegistrationForm = ({...props}) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [petAge, setPetAge] = useState('');
    const [petName, setPetName] = useState('');
    const [error, setError] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
    }
    const onChangeFirstName = (e) => {
        const name = e.target.value;
        setFirstName(name);
    }
    const onChangeLastName = (e) => {
        const name = e.target.value;
        setLastName(name);
    }
    const onChangePetName = (e) => {
        const petName = e.target.value;
        setPetName(petName);
    }
    const onChangePetAge = (e) => {
        const age = e.target.value;
        setPetAge(age);
    }
    const onChangeLogin = (e) => {
        const login = e.target.value;
        setLogin(login);
    }
    const onChangePassword = (e) => {
        const passwd = e.target.value;
        setPassword(passwd);
    }
    const newUserToServer = () => {
        axios.post('/api/registration/', {firstName, lastName, petName, login,
            password, petAge})
            .then(response => {
                console.log('/api/registration/ response:::', response);
                //надо на сервере доделать проверку введенных значений
                //а то сейчас можно установить все что угодно, в тч одинаковые логины
                //и надо придумать что-то с паролями
                //после того, как пришел success с сервера, то можно также установить
                //значение в localStorage и сделать как в логине, тк перенаправление в профиль одинаковое?
            })
    }

    return (
        <form className={'form'} onSubmit={onSubmit}>
            <div>
                <input onChange={onChangeFirstName} value={firstName} type='text' placeholder='Введите Ваше имя'/>
                <input onChange={onChangeLastName} value={lastName} type='text' placeholder='Введите Вашу фамилию'/>
            </div>
            <input onChange={onChangeLogin} value={login} type='text' placeholder='Придумайте логин' />
            <input onChange={onChangePassword} value={password}  type='password' placeholder='Придумайте пароль' />
            <input onChange={onChangePetName} value={petName}  type='text' placeholder='Введите кличку собаки' />
            <input onChange={onChangePetAge} value={petAge} placeholder={'Укажите возраст своего питомца'}/>
            {/* может тип добавить еще? */}
            <div>
                <button className='button' type='submit' onClick={newUserToServer}>Зарегистрироваться</button>
            </div>
        </form>
    )
}

export default RegistrationForm;