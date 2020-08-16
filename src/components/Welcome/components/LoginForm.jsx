import React, {useState} from "react";
import '../welcome.css'
import axios from "axios";
import {Redirect} from "react-router-dom";

const LoginForm = ({...props}) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const [isAuthError, setIsAuthError] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        if (login.length && password.length) {
            checkLoginData();
        } else {

        }
    }
    const onChangeLogin = (e) => {
        const login = e.target.value;
        setLogin(login);
    }
    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    }
    const checkLoginData = () => {
        axios.post('/api/login/', {login, password})
            .then(response => {
                let data = response.data;
                if (data) {
                    setIsAuthError(false)
                    localStorage.setItem("user", JSON.stringify(data));
                    console.log('проверь локалСторедж')
                    props.history.push('/profile/' + data.id)
                    window.location.reload();
                    // return <Redirect to={`/profile/${data.id}`}/>
                } else {
                    console.log('ничего не меняем');
                    setIsAuthError(true);
                }
            })
    }

    return (
        <form className='form' onSubmit={onSubmit}>
            { isAuthError ? <div className='error'>Некорректный логин и/или пароль</div> : null }
            <input
                name='login'
                type='text'
                placeholder='Введите логин'
                className='input'
                value={login}
                onChange={onChangeLogin}
            />
            <input
                name='password'
                type='password'
                placeholder='Введите пароль'
                className='input'
                value={password}
                onChange={onChangePassword}
            />
            <input className='submit-btn button' type="submit" value='Войти'/>
        </form>
    )
}

export default LoginForm;