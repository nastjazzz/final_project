import React from 'react'
import axios from "axios";

//ребят, это просто тестовый компонент, чтобы понимать, что post запросы работают
//я его подключала в компоненту <ProfileInfo/> чтобы понять, что все работает
//
const CreateUser = ({onChangeForm, createUser}) => {
    return (
        <div className="container">
            <h2>Create User</h2>
            <form>
                <div className="row">
                    <div>
                        <label htmlFor="exampleInputEmail1">First Name</label>
                        <input
                            type="text"
                            onChange={(e) => onChangeForm(e)}
                            className="form-control"
                            name="firstname" id="firstname"
                            aria-describedby="emailHelp"
                            placeholder="First Name"
                        />
                    </div>
                    <div>
                        <label htmlFor="exampleInputPassword1">Last Name</label>
                        <input
                            type="text"
                            onChange={(e) => onChangeForm(e)}
                            className="form-control"
                            name="lastname"
                            id="lastname"
                            placeholder="Last Name"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-md-12">
                        <label htmlFor="exampleInputEmail1">Email</label>
                        <input
                            type="text"
                            onChange={(e) => onChangeForm(e)}
                            className="form-control"
                            name="email"
                            id="email"
                            aria-describedby="emailHelp"
                            placeholder="Email"
                        />
                    </div>
                </div>
                <button type="button" onClick={(e) => createUser()} className="btn btn-danger">Create</button>
            </form>
        </div>
    )
}

class Users extends React.Component {
    state = {
        user: {},
        users: [],
        totalUsers: 0
    }

    onChangeForm = (e) => {
        // console.log('e.target = ',e.target);
        let user = this.state.user;
        console.log('user', user);
        if (e.target.name === 'firstname') {
            user.firstName = e.target.value;
        } else if (e.target.name === 'lastname') {
            user.lastName = e.target.value;
        } else if (e.target.name === 'email') {
            user.email = e.target.value;
        }
        this.setState({user: user})
        // console.log('this.state: ',   this.state.user);
    }

    createUser = () => {
        let user = this.state.user; //этот параметр передаем в запрос
        console.log(user); //в файле server.js выводится этот же пользователь - console.log('REQUEST', req.body);
        axios.post('/api/registration/', user)
            .then(resp => {
                console.log('POST RESPONSE', resp); //просто вывожу в консоль браузера для понимания
                this.setState({totalUsers: this.setState.totalUsers + 1})
            })
    }

    render() {
        return (
            <CreateUser
                onChangeForm={this.onChangeForm} createUser={this.createUser}
            />
        )
    }
}

export default Users;

