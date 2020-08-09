import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './recommendation.css'
import Filter from "./Filter/Filter";
import SorryFilter from "./Help/SorryFilter";
import UsersCards from "./UsersCards/UsersCards";

const Recommendation = () => {
	const [state, setState] = useState({ users: [], totalUsers: 0 })
	const [filteredResults, setFilteredResults] = useState({
		users: [{}],
		prevUsers: []
	});

	let getUsersFromServer = () => {
		axios.get('/api/users/')
			.then(resp => {
				let data = resp.data.users; //получаем пол-лей с сервера
				// console.log('response', resp);
				setState({users: data, totalUsers: data.length})
				setFilteredResults({prevUsers: data, users: data})
				console.log('state.users', state);
			})
			.catch(err => console.log('err', err))
	}

	useEffect(() => {
		getUsersFromServer();
	}, [])



	let onGenderFilterChecked = (e, gender) => {
		// let isChecked = !!e.target.checked; //проверяю нажали на чекбокс или сняли метку
		// console.log('isChecked ', isChecked);
		let res;

		if (e.target.checked) {
			res = state.users.filter(user => user.pets.gender === gender)
			console.log('res - filtered users', res);
			setFilteredResults({users: res})
			console.log('users', filteredResults.users);
		} else {
			getUsersFromServer();
		}
	}

	let onAgeFilterChecked = (e, age) => {
		let isChecked = !!e.target.checked; //проверяю нажали на чекбокс или сняли метку
		let arrOfAge = age.split('-');
		let filteredDogs;

		if (isChecked) {
			if (arrOfAge[1] === '3') {
				filteredDogs = state.users.filter(user => user.pets.age <= 3 && user.pets.age >= 1)
				setState({users: filteredDogs})
			} else if (arrOfAge[1] === '8') {
				filteredDogs = state.users.filter(user => user.pets.age <= 8 && user.pets.age >= 4)
				setState({users: filteredDogs})
			} else if (arrOfAge[0] === '1') {
				filteredDogs = state.users.filter(user => user.pets.age < 1)
				setState({users: filteredDogs})
			} else if (arrOfAge[0] === '8') {
				filteredDogs = state.users.filter(user => user.pets.age > 8)
				setState({users: filteredDogs})
			}
		} else {
			getUsersFromServer();
			console.log('надо подумать над несколькими фильтрами, типа до года + 1-3г')
		}
	}

	let onBreedFilterChecked = (e, breed) => {
		let isChecked = !!e.target.checked; //проверяю нажали на чекбокс или сняли метку
		let filteredDogs;

		if (isChecked) {
			switch (breed) {
				case 'ovcharka':
					filteredDogs = state.users.filter(user => {
						return user.pets.breed.toLowerCase() === 'Овчарка'.toLowerCase();
					});
					setState({users: filteredDogs});
					break;
				case 'retriver':
					filteredDogs = state.users.filter(user => {
						return user.pets.breed.toLowerCase() === 'Ретривер'.toLowerCase();
					});
					setState({users: filteredDogs});
					break;
				case 'pitbul':
					filteredDogs = state.users.filter(user => {
						return user.pets.breed.toLowerCase() === 'Питбуль'.toLowerCase();
					});
					setState({users: filteredDogs});
					break;
				case 'haski':
					filteredDogs = state.users.filter(user => {
						return user.pets.breed.toLowerCase() === 'Хаски'.toLowerCase();
					});
					setState({users: filteredDogs});
					break;
				case 'labrador':
					filteredDogs = state.users.filter(user => {
						return user.pets.breed.toLowerCase() === 'Лабрадор'.toLowerCase();
					});
					setState({users: filteredDogs});
					break;
				case 'taksa':
					filteredDogs = state.users.filter(user => {
						return user.pets.breed.toLowerCase() === 'Такса'.toLowerCase();
					});
					setState({users: filteredDogs});
					break;
				default:
					break;
			}
		} else {
			getUsersFromServer();
		}
	}

	let onLocationFilterChecked = (e, location) => {
		let isChecked = !!e.target.checked; //проверяю нажали на чекбокс или сняли метку
		let filteredDogs;
		console.log('115:::',location);
		if (isChecked) {
			switch (location) {
				case 'CAO':
					filteredDogs = state.users.filter(user => user.location.district === 'ЦАО')
					setState({users: filteredDogs});
					break;
				case 'SAO':
					filteredDogs = state.users.filter(user => user.location.district === 'САО')
					setState({users: filteredDogs});
					break;
				case 'SVAO':
					filteredDogs = state.users.filter(user => user.location.district === 'СВАО')
					setState({users: filteredDogs});
					break;
				case 'VAO':
					filteredDogs = state.users.filter(user => user.location.district === 'ВАО')
					setState({users: filteredDogs});
					break;
				case 'YVAO':
					filteredDogs = state.users.filter(user => user.location.district === 'ЮВАО')
					setState({users: filteredDogs});
					break;
				case 'YAO':
					filteredDogs = state.users.filter(user => user.location.district === 'ЮАО')
					setState({users: filteredDogs});
					break;
				case 'YZAO':
					filteredDogs = state.users.filter(user => user.location.district === 'ЮЗАО')
					setState({users: filteredDogs});
					break;
				case 'ZAO':
					filteredDogs = state.users.filter(user => user.location.district === 'ЗАО')
					setState({users: filteredDogs});
					break;
				case 'SZAO':
					filteredDogs = state.users.filter(user => user.location.district === 'СЗАО')
					setState({users: filteredDogs});
					break;
				case 'ZelAO':
					filteredDogs = state.users.filter(user => user.location.district === 'ЗелАО')
					setState({users: filteredDogs});
					break;
				case 'TAO':
					filteredDogs = state.users.filter(user => user.location.district === 'ТАО')
					setState({users: filteredDogs});
					break;
				case 'NAO':
					filteredDogs = state.users.filter(user => user.location.district === 'НАО')
					setState({users: filteredDogs});
					break;
				default:
					break;
			}
		} else {
			getUsersFromServer();
		}
	}

// !!!нужно доработать ошибки!!!
// сейчас плохо работает снятие чекбоксов и последующее отображение результатов
// надо подумать как брать предыдущий результат
// + скорее всего надо выносить методы, тк слишком много получилось
// + некорректно отображаются результаты, если одновременно нажаты 2 чекбокса(н, мальчики + девочки)
// надо дописывать в state польз-лей, а не перезаписывать


	let onTypeFilterChecked = (e, type) => {
		let results;

		if (type === 'small') {
			let res;
			if (e.target.checked) {
				res = state.users.filter(user => user.pets.type === 'мелкая');
				setFilteredResults({users: res})
				console.log(typeof res)
				console.log(res)
			} else {
				res = filteredResults.users.filter(user => user.pets.type !== 'мелкая');
				setFilteredResults({users: res})
			}
		} else if (type === 'medium') {
			results = state.users.filter(user => user.pets.type === 'средняя');
			setFilteredResults({users: [...filteredResults.users, ...results]})
		} else if (type === 'large') {
			results = state.users.filter(user => user.pets.type === 'крупная');
			setFilteredResults({users: [...filteredResults.users, ...results]})
		}
		// } else {

	}
	// 	else if (type === 'large') {
	// 		results = state.users.filter(user => user.pets.type === 'крупная');
	// 		setState({users: results});
	// 	}
	// } else {
	// 	getUsersFromServer();
	// }


	let onChangeCheckboxes = (e) => {
		console.log(e.target.checked)
		console.log(e.type)
		let name = e.target.name;
		let arrOfName = name.split(' ');
		console.log('onChangeCheckboxes', arrOfName);

		if (arrOfName[0] === 'gender') {
			onGenderFilterChecked(e, arrOfName[1]);
		}
		// else if (arrOfName[0] === 'age') {
		// 	onAgeFilterChecked(e, arrOfName[1]);
		// } else if (arrOfName[0] === 'breed') {
		// 	onBreedFilterChecked(e, arrOfName[1]);
		// } else if (arrOfName[0] === 'location') {
		// 	onLocationFilterChecked(e, arrOfName[1])
		// } else if (arrOfName[0] === 'type') {
		// 	onTypeFilterChecked(e, arrOfName[1])
		// }
	}

	return (
		<div className='recommendation'>
			<Filter
				getState={state}
				onChangeCheckboxes={onChangeCheckboxes}
			/>
			{/*{*/}
			{/*	filteredResults.users !== undefined ?*/}
			{/*		<UsersCards getState={filteredResults}/> :*/}
			{/*		<SorryFilter/>*/}
			{/*}*/}
		</div>
	)
}

export default Recommendation;