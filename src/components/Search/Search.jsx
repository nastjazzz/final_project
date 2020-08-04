import React from 'react';
import axios from 'axios';
import './search.css'
import dogPhoto from '../dogPhoto.jpg';
import Filter from "./Filter/Filter";

//в пропсах я получаю список пользователей
//если я хочу, чтобы при клике на чекбокс менялось отображение пользователей
//тогда я должна поменять как-то users


const UsersCards = ({ getState }) => {
	console.log('props UsersCards', getState.users);

	let usersFromServer = [...getState.users];
	console.log('usersFromServer', usersFromServer);
//одна карточка собаки
	let cardItem = usersFromServer.map(user => {
		return (
			<div className='card__wrapper' key={user.id}>
				 <div className='pets-info'>
					<div className='pets-info__name'>
						{user.pets.name}, {user.pets.age}
					</div>
					<div className='pets-info__photo'>
						<img src={dogPhoto} alt="user`s dog" />
					</div>
				</div>
				<div className='user-info'>
					<div className='user-info__name'>
						Хозяин: {user.firstName}
					</div>
					<div className='user-info__location'>
						Гуляют в {user.location.district}
					</div>
				</div>

			</div>
		)
	})

	return (
		<div className='search__wrapper'>
			{cardItem}
		</div>
	)
}
export const MyContext = React.createContext(null);


// const TestContext = () => {
// 	let testUser = {
// 		"id": 44,
// 		"firstName": "Никита",
// 		"lastName": "Никитин",
// 		"location": {
// 			"country": "Россия",
// 			"city": "Москва",
// 			"district": "ЮАО"
// 		},
// 		"havePets": true,
// 		"pets": {
// 			"type": "dog",
// 			"name": "Джек",
// 			"age": 2,
// 			"gender": "male"
// 		}
// 	}
//
// 	return (
// 		<div>
// 			<MyContext.Consumer>
// 				{
// 					value => value.users.push(testUser)
// 				}
// 			</MyContext.Consumer>
// 		</div>
//
// 	)
// }

class Search extends React.Component {
	state = {
		user: {},
		users: [],
		totalUsers: 0
	};

	genderDogs = this.state.users

	componentDidMount() {
		axios.get('/api/users/')
			.then(resp => {
				let data = resp.data.users; //получаем пол-лей с сервера
				// console.log('response', resp); //выводим в консоль
				this.setState({users: data, totalUsers: data.length}) //вызываю метод класса и говорю ему поменять данные в моем state
				console.log('state.users', this.state);
			})
			.catch(err => console.log('err', err))
	}


	render() {
		return (
			<>
				{/* <MyContext.Provider value={this.state}>*/}
				<Filter getState={this.state}/>
				<UsersCards getState={this.state}/>
				{/*<TestContext />*/}
				{/*</MyContext.Provider>*/}
			</>
		)
	}
}

export default Search;