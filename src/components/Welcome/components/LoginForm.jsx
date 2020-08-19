import React, {useState} from "react";
import '../welcome.css'
import axios from "axios";
import {Redirect} from "react-router-dom";
import Preloader from "../../Preloader/Preloader";

const LoginForm = ({...props}) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const [isAuthError, setIsAuthError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        if (login.length && password.length) {
            checkLoginData();
        } else {
            setIsAuthError(true);
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

        setIsAuthError(false);
        setIsLoading(true);
        const auth = `${login}:${password}`;

        axios.get('/api/login/', {
            headers: {
                'Authorization': auth
            }
        })
            .then(response => {
                setIsLoading(false);
                console.log(response);
                if (response.status === 200) {
                    localStorage.setItem("user", JSON.stringify({"user": true})); //??
                    props.history.push('/profile/2')
                }
            })
            .catch(error => {
                console.log(error);
                setIsAuthError(true);
                setIsLoading(false);
            })

    }

    return (
        <form className='form' onSubmit={onSubmit}>
            {isLoading ? <Preloader /> : null}
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