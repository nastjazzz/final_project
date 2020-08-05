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
// export const MyContext = React.createContext(null);


class Search extends React.Component {
	state = {
		user: {},
		users: [],
		totalUsers: 0
	};

	getUsersFromServer() {
		axios.get('/api/users/')
			.then(resp => {
				let data = resp.data.users; //получаем пол-лей с сервера
				// console.log('response', resp);
				this.setState({users: data, totalUsers: data.length})
				console.log('state.users', this.state);
			})
			.catch(err => console.log('err', err))
	}

	componentDidMount() {
		this.getUsersFromServer();
	}

	onGenderFilterChecked = (e, gender) => {
		let isChecked = !!e.target.checked; //проверяю нажали на чекбокс или сняли метку
		console.log('isChecked ', isChecked);

		if (isChecked) {
			let res = this.state.users.filter(user => user.pets.gender === gender)
			console.log(res);
			this.setState({users: res})
			console.log('state.users', this.state);
		} else {
			this.getUsersFromServer();
		}
	}

	onAgeFilterChecked = (e, age) => {
		let isChecked = !!e.target.checked; //проверяю нажали на чекбокс или сняли метку
		let arrOfAge = age.split('-');
		let filteredDogs;

		if (isChecked) {
			if (arrOfAge[1] === '3') {
				filteredDogs = this.state.users.filter(user => user.pets.age <= 3 && user.pets.age >= 1)
				this.setState({users: filteredDogs})
			} else if (arrOfAge[1] === '8') {
				filteredDogs = this.state.users.filter(user => user.pets.age <= 8 && user.pets.age >= 4)
				this.setState({users: filteredDogs})
			} else if (arrOfAge[0] === '1') {
				filteredDogs = this.state.users.filter(user => user.pets.age < 1)
				this.setState({users: filteredDogs})
			} else if (arrOfAge[0] === '8') {
				filteredDogs = this.state.users.filter(user => user.pets.age > 8)
				this.setState({users: filteredDogs})
			}
		} else {
			this.getUsersFromServer();
			console.log('надо подумать над несколькими фильтрами, типа до года + 1-3г')
		}
	}

	onBreedFilterChecked = (e, breed) => {
		let isChecked = !!e.target.checked; //проверяю нажали на чекбокс или сняли метку
		let filteredDogs;

		if (isChecked) {
			switch (breed) {
				case 'ovcharka':
					filteredDogs = this.state.users.filter(user => {
						return user.pets.breed.toLowerCase() === 'Овчарка'.toLowerCase();
					});
					this.setState({users: filteredDogs});
					break;
				case 'retriver':
					filteredDogs = this.state.users.filter(user => {
						return user.pets.breed.toLowerCase() === 'Ретривер'.toLowerCase();
					});
					this.setState({users: filteredDogs});
					break;
				case 'pitbul':
					filteredDogs = this.state.users.filter(user => {
						return user.pets.breed.toLowerCase() === 'Питбуль'.toLowerCase();
					});
					this.setState({users: filteredDogs});
					break;
				case 'haski':
					filteredDogs = this.state.users.filter(user => {
						return user.pets.breed.toLowerCase() === 'Хаски'.toLowerCase();
					});
					this.setState({users: filteredDogs});
					break;
				case 'labrador':
					filteredDogs = this.state.users.filter(user => {
						return user.pets.breed.toLowerCase() === 'Лабрадор'.toLowerCase();
					});
					this.setState({users: filteredDogs});
					break;
				case 'taksa':
					filteredDogs = this.state.users.filter(user => {
						return user.pets.breed.toLowerCase() === 'Такса'.toLowerCase();
					});
					this.setState({users: filteredDogs});
					break;
				default:
					break;
			}
		} else {
			this.getUsersFromServer();
		}
	}

	onLocationFilterChecked = (e, location) => {
		let isChecked = !!e.target.checked; //проверяю нажали на чекбокс или сняли метку
		let filteredDogs;
		console.log('115:::',location);
		if (isChecked) {
			switch (location) {
				case 'CAO':
					filteredDogs = this.state.users.filter(user => user.location.district === 'ЦАО')
					this.setState({users: filteredDogs});
					break;
				case 'SAO':
					filteredDogs = this.state.users.filter(user => user.location.district === 'САО')
					this.setState({users: filteredDogs});
					break;
				case 'SVAO':
					filteredDogs = this.state.users.filter(user => user.location.district === 'САО')
					this.setState({users: filteredDogs});
					break;
				case 'VAO':
					filteredDogs = this.state.users.filter(user => user.location.district === 'ВАО')
					this.setState({users: filteredDogs});
					break;
				case 'YVAO':
					filteredDogs = this.state.users.filter(user => user.location.district === 'ЮВАО')
					this.setState({users: filteredDogs});
					break;
				case 'ZAO':
					filteredDogs = this.state.users.filter(user => user.location.district === 'ЗАО')
					this.setState({users: filteredDogs});
					break;
				case 'SZAO':
					filteredDogs = this.state.users.filter(user => user.location.district === 'СЗАО')
					this.setState({users: filteredDogs});
					break;
				case 'ZelAO':
					filteredDogs = this.state.users.filter(user => user.location.district === 'ЗелАО')
					this.setState({users: filteredDogs});
					break;
				case 'TAO':
					filteredDogs = this.state.users.filter(user => user.location.district === 'ТАО')
					this.setState({users: filteredDogs});
					break;
				case 'NAO':
					filteredDogs = this.state.users.filter(user => user.location.district === 'НАО')
					this.setState({users: filteredDogs});
					break;
				default:
					break;
			}
		} else {
			this.getUsersFromServer();
		}
	}

	onChangeCheckboxes = (e) => {
		let name = e.target.name;
		let arrOfName = name.split(' ');
		console.log('onChangeCheckboxes', arrOfName);

		if (arrOfName[0] === 'gender') {
			this.onGenderFilterChecked(e, arrOfName[1]);
		} else if (arrOfName[0] === 'age') {
			this.onAgeFilterChecked(e, arrOfName[1]);
		} else if (arrOfName[0] === 'breed') {
			this.onBreedFilterChecked(e, arrOfName[1]);
		} else if (arrOfName[0] === 'location') {
			this.onLocationFilterChecked(e, arrOfName[1])
		}
	}


	render() {
		return (
			<>
				<Filter
					getState={this.state}
					onChangeCheckboxes={this.onChangeCheckboxes}
				/>
				<UsersCards getState={this.state} />
			</>
		)
	}
}

export default Search;