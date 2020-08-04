import React from 'react';
import axios from 'axios';
import './search.css'

const UsersCards = (props) => {
	console.log('props UsersCards', props);

	let usersFromServer = props.users; //arr of users
	console.log('usersFromServer', usersFromServer);

	let cardItem = usersFromServer.map(user => {
		return (
			<div className='card__wrapper' key={user.id}>
				<div className='user-info'>
					<div>
						{user.firstName} {user.lastName}
					</div>
					<div>
						{user.location.city} {user.location.country}
					</div>
					<div className='pets-info'>
						{user.havePets && user.pets.type}:
						{user.havePets && user.pets.name},{ user.havePets && user.pets.age} г
					</div>
				</div>
			</div>
		)
	})

	return (
		<div>
			{cardItem}
		</div>
	)
}

class Search extends React.Component {
//локальное хранилище
    state = {
    	user: {},
		users: [],
		totalUsers: 0
	}

	componentDidMount() {
		axios.get('/api/users/')
			.then(resp => {
				let data = resp.data.users; //получаем пол-лей с сервера
				console.log('response', resp); //выводим в консоль
				this.setState({users: data, totalUsers: data.length}) //вызываю метод класса и говорю ему поменять данные в моем state
				console.log('state.users', this.state);
			})
			.catch(err => console.log('err', err))
	}

	render() {
		return (
			<div className='search__wrapper'>
				{/*<button onClick={this.getUsers}>Get Users</button>*/}
				<UsersCards
					users={this.state.users}
				/>
			</div>
		)
	}

}

export default Search;