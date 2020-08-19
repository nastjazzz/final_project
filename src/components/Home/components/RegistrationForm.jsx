import React, {useState} from "react";
import axios from "axios";
import './components.css';
import Preloader from "../../Preloader/Preloader";

const RegistrationForm = ({...props}) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [petAge, setPetAge] = useState('');
    const [petName, setPetName] = useState('');

    const [error, setError] = useState([false, '']);
    const [isValidLogin, setIsValidLogin] = useState(true);
    const [isValidPassword, setIsValidPassword] = useState(true);
    const [isValidPetAge, setIsValidPetAge] = useState([true, '']);

    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        if (firstName.length && lastName.length && login.length && password.length
            && petName.length && petAge.length && isValidLogin && isValidPassword) {
            putNewUserToServer();
            setError([false, '']);
        } else {
            setError([true, 'Заполните все приведенные ниже поля!']);
        }
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
        (isNaN(+age) ?
            setIsValidPetAge([false, 'Укажите количество полных лет!']) : setIsValidPetAge([true, '']))
        setPetAge(age);
    }
    const onChangeLogin = (e) => {
        const login = e.target.value;
        (login.length < 5 || login.length > 20) ? setIsValidLogin(false) : setIsValidLogin(true);
        setLogin(login);
    }
    const onChangePassword = (e) => {
        const passwd = e.target.value;
        (passwd.length < 6 || passwd.length > 30) ? setIsValidPassword(false) : setIsValidPassword(true);
        setPassword(passwd);
    }

    const putNewUserToServer = () => {
        setIsLoading(true);
        axios.post('/api/registration/', {
                firstName,
                lastName,
                login,
                password,
                "pets": {
                    "name": petName,
                    "age": petAge
                }}, {
            headers: {
                'Authorization': 'secretToken'
            }
        })
            .then(response => {
                setIsLoading(false);
                console.log('/api/registration/ response:::', response);
                if (response.data.isReg === true) {
                    localStorage.setItem('user', JSON.stringify(response.data.newUser));
                    props.history.push('/profile/' + response.data.newUser.id);
                    window.location.reload();
                }
            })
            .catch(error => {
                console.log('registr error', error);
                setIsLoading(false);
                setError([true, 'Такой логин уже занят! Придумайте другой логин']);
            })
    }

    return (
        <form className={'form'} onSubmit={onSubmit}>
            {isLoading ? <Preloader /> : null}
            {error[0] ? <div className='error'>{error[1]}</div> : null}

            <input className='input' onChange={onChangeLogin} value={login} type='text' placeholder='Придумайте логин'/>
            {isValidLogin ? null : <div className='valid-error'>Логин должен быть от 5 до 20 символов</div>}
            <input className='input' onChange={onChangePassword} value={password} type='password'
                   placeholder='Придумайте пароль'/>
            {isValidPassword ? null : <div className='valid-error'>Пароль должен содержать от 6 символов</div>}

            <input className='input' onChange={onChangeFirstName} value={firstName} type='text'
                   placeholder='Введите имя'/>
            <input className='input' onChange={onChangeLastName} value={lastName} type='text'
                   placeholder='Введите фамилию'/>

            <input className='input' onChange={onChangePetName} value={petName} type='text'
                   placeholder='Укажите имя питомца' />
            <input className='input' onChange={onChangePetAge} value={petAge} type='text'
                       placeholder='Укажите возраст питомца'/>
            {!isValidPetAge[0] ? <div className='valid-error'>{isValidPetAge[1]}</div> : null}
            {/* надо ли добавлять еще полей? */}
            <input className='submit-btn button ' type='submit' value='Зарегистрироваться'/>
            {/*<button className='button submit-btn' type='submit'>Зарегистрироваться</button>*/}
        </form>
    )
}

export default RegistrationForm;