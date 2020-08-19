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

    const testLogin = () => {
        let log = 'login';
        let pass = 'password';
        const auth = `${log}:${pass}`
        // const auth = 'Basic ' + new Buffer(log + ':' + pass).toString('base64');
        // console.log('clientHash', auth);
        // const config = {
        //     headers: {
        //         'Authorization': auth
        //     }
        // }
        //axios.post(url, data, { config })
        axios.get('/api/auth/login/', {
            headers: {
                'Authorization': auth
            }
        }).then(response => {
                console.log(response);
            }).catch(error => {
                console.log(error);
        })

    }


    const checkLoginData = () => {

        setIsAuthError(false);
        setIsLoading(true);

        // axios.post('/api/login/', {login, password}, {
        //     headers: {
        //         'Authorization': 'secretToken'
        //     }
        // }).then(response => {
        //     let data = response.data;
        //     console.log('LOGIN-RESPONSE', data);
        //     if (data) {
        //         setIsLoading(false);
        //         setIsAuthError(false)
        //         localStorage.setItem("user", JSON.stringify(data));
        //         console.log('проверь локалСторедж')
        //         props.history.push('/profile/' + data.id)
        //         // window.location.reload();
        //         // return <Redirect to={`/profile/${data.id}`}/>
        //     } else {
        //         setIsLoading(false);
        //
        //         console.log('ничего не меняем');
        //         setIsAuthError(true);
        //     }
        // }).catch(error => console.log('/api/login/ error', error))
    }

    return (
        <form className='form' onSubmit={onSubmit}>
            <button onClick={testLogin}>testAuthHeaders</button>

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