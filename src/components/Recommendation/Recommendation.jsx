import React, {useEffect, useState} from 'react';
import './recommendation.css'
import axios from 'axios';

//фильтры
import AgeFilter from "./Filter/components/FilterComponents/AgeFilter";
import Filter from "./Filter/Filter";
import TypeFilter from "./Filter/components/FilterComponents/TypeFilter";
import GenderFilter from "./Filter/components/FilterComponents/GenderFilter";
import DistrictFilter from "./Filter/components/FilterComponents/DiscrictFilter";

import UsersCards from "./UsersCards/UsersCards";
import SorryFilter from "./Help/SorryFilter";
import ParametersBlock from "./Filter/components/parametersBlock/parametersBlock";

const Recommendation = () => {

	//all users from server
	const [users, setUsers] = useState([]);

	//arr of filter value
	const [age, setAge] = React.useState(['','']);
	const [type, setType] = React.useState([]);
	const [gender, setGender] = React.useState([]);
	const [district, setDistrict] = React.useState([]);

	//конечный массив пользователей, который пойдет в <UsersCards />
	let filteredResults;

	let getUsersFromServer = () => {
		axios.get('/api/users/')
			.then(resp => {
				let data = resp.data.users; //получаем объект с пользователями с сервера
				setUsers(data) //записываем их в массив
			})
			.catch(err => console.log('err', err))
	}

	useEffect(() => {
		getUsersFromServer();
	}, [])

	//arr of dog's types
	const types = React.useMemo(() => [...new Set(users.map(u => u.pets.type))],[users]);
	console.log('types:::', types);

	//arr of dog's genders
	const genders = React.useMemo(() => [...new Set(users.map(u => u.pets.gender))], [users]);
	console.log('genders:::', genders);

	//arr of districts
	const districts = React.useMemo(() => [...new Set(users.map(u => u.location.district))], [users])
	console.log('districts:::', districts);

	const onAgeChange = ({ target: { value, dataset: { index } } }) => {
		setAge(age.map((n, i) => i === +index ? value : n));
	};

	const onTypeChange = ({target: {checked, value}}) => (
		setType((!type.includes(value) && checked) ? [...type, value] : type.filter(n => n !== value))
	);
	const onGenderChange = ({target: {checked, value}}) => (
		setGender((!gender.includes(value) && checked) ? [...gender, value] : gender.filter(g => g !== value))
	);
	const onDistrictChange = ({target: {checked, value}}) => (
		setDistrict((!district.includes(value) && checked) ? [...district, value] : district.filter(d => d !== value))
	);


//новый массив объектов отфильтрованных пользователей
	filteredResults = users.filter(u => (
		(!type.length || type.includes(u.pets.type)) &&
		(!gender.length || gender.includes(u.pets.gender)) &&
		(!district.length || district.includes(u.location.district)) &&
		(!age[0].length || age[0] <= u.pets.age) &&
		(!age[1].length || age[1] >= u.pets.age)
	));

	return (
		<div className='recommendation'>
			<div className='recommendation_content'>
				<Filter>
					<ParametersBlock title='Пол'>
						<GenderFilter value={gender} onChange={onGenderChange} genders={genders} />
					</ParametersBlock>
					<ParametersBlock title='Возраст'>
						<AgeFilter value={age} onChange={onAgeChange} />
					</ParametersBlock>
					<ParametersBlock title='Тип собаки'>
						<TypeFilter value={type} onChange={onTypeChange} types={types} />
					</ParametersBlock>
					<ParametersBlock title='Район'>
						<DistrictFilter value={district} onChange={onDistrictChange} districts={districts} />
					</ParametersBlock>
				</Filter>
				{
					filteredResults.length ?
						<UsersCards users={filteredResults}/> : <SorryFilter/>
				}
			</div>
		</div>
	)
}

export default Recommendation;