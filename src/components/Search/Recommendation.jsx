import React from 'react';
import axios from 'axios';
import './recommendation.css'
import Filter from "./Filter/Filter";
import SorryFilter from "./SorryFilter";
import UsersCards from "./UsersCard";

class Recommendation extends React.Component {
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
					filteredDogs = this.state.users.filter(user => user.location.district === 'СВАО')
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
				case 'YAO':
					filteredDogs = this.state.users.filter(user => user.location.district === 'ЮАО')
					this.setState({users: filteredDogs});
					break;
				case 'YZAO':
					filteredDogs = this.state.users.filter(user => user.location.district === 'ЮЗАО')
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

// !!!нужно доработать ошибки!!!
// сейчас плохо работает снятие чекбоксов и последующее отображение результатов
// надо подумать как брать предыдущий результат
// + скорее всего надо выносить методы, тк слишком много получилось
// + некорректно отображаются результаты, если одновременно нажаты 2 чекбокса(н, мальчики + девочки)
// надо дописывать в state польз-лей, а не перезаписывать

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
			<div className='recommendation'>
				<Filter
					getState={this.state}
					onChangeCheckboxes={this.onChangeCheckboxes} />
				{
					this.state.users.length ?
						<UsersCards getState={this.state}/> :
						<SorryFilter/>
				}
			</div>
		)
	}
}

export default Recommendation;