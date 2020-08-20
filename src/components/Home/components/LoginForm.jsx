import React, {useState, useContext} from "react";
import '../home.css'
import axios from "axios";
import Preloader from "../../Preloader/Preloader";
import {Redirect} from "react-router-dom";
// import Loader from "../../Loader/Loader";
import UserInfo from "../../../UserContext";

const LoginForm = ({...props}) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const [isAuthError, setIsAuthError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [, setAuthHash] = useContext(UserInfo);

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

        axios.post('/api/login/', {login, password})
            .then(response => {
                let data = response.data;
                console.log('LOGIN-RESPONSE', data);
                if (data) {
                    setIsLoading(false);
                    setIsAuthError(false)
                    // localStorage.setItem("user", JSON.stringify(data));
                    setAuthHash(data);
                    // console.log('проверь локалСторедж')
                    props.history.push('/profile/' + data.id)
                    // window.location.reload();
                    // return <Redirect to={`/profile/${data.id}`}/>
                } else {
                    setIsLoading(false);
                }
            })

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
                    // props.history.push('/profile/2');
                    window.location.href = '/profile/2';
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