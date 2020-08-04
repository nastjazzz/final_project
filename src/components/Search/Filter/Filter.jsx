import React from 'react'
import './filter.css'

function Filter({getState}) {

	let users = getState.users;

	let onGenderFilterChecked = (e) => {
		let name = e.target.name;

		let isChecked = !!e.target.checked;
		console.log(isChecked);

		let res = users;
		if (isChecked) {
			res = users.filter(user => user.pets.gender === name)
			console.log(res);
		}
		console.log(res);


		// getState.users = res;


		// let users = getState.users.filter(user => user.pets.gender === name);
		// console.log(users);
	}

	return (
		<div className='filter'>
			<div className='filter__title'>
				Рекомендации
			</div>
			<div className='filter__subtitle'>
				Найдите своему питомцу компанию для прогулок
			</div>
			<div className='filter__items'>
				{/*<form onChange={(e) => onGenderFilterChecked(e)}>*/}
					<details className='filter__item'>
						<summary className='item__subtitle'>
							Пол
						</summary>
						<div className='item__body' onChange={(e) => onGenderFilterChecked(e)}>
							<label>
								<input
									type="checkbox"
									name='female'
								/>
								Девочка
							</label>
							<label>
								<input
									type="checkbox"
									name='male'
									// onChange={(e) => onGenderFilterChecked(e)}
								/>
								Мальчик
							</label>
						</div>
					</details>
					<details className='filter__item'>
						<summary className='item__subtitle'>
							Возраст
						</summary>
						<div className='item__body'>
							<label><input type="checkbox" name='1'/>меньше 1 года</label>
							<label><input type="checkbox" name='1-3'/>1 - 3</label>
							<label><input type="checkbox" name='4-8'/>4 - 8</label>
							<label><input type="checkbox" name='8'/>больше 8 лет</label>
						</div>
					</details>
					<details className='filter__item'>
						<summary className='item__subtitle'>
							Порода
						</summary>
						<div className='item__body'>
							<label><input type="checkbox" name='breed' defaultChecked/>Не важно</label>
							<label><input type="checkbox" name='breed'/>Хаски</label>
							<label><input type="checkbox" name='breed'/>Овчарка</label>
							<label><input type="checkbox" name='breed'/>Питбуль</label>
							<label><input type="checkbox" name='breed'/>Без породы</label>
						</div>
					</details>
					<details className='filter__item'>
						<summary className='item__subtitle'>
							Район
						</summary>
						<div className='item__body'>
							<label><input type="checkbox" name='location'/>ЦАО</label>
							<label><input type="checkbox" name='location'/>САО</label>
							<label><input type="checkbox" name='location'/>СВАО</label>
							<label><input type="checkbox" name='location'/>ВАО</label>
							<label><input type="checkbox" name='location'/>ЮВАО</label>
							<label><input type="checkbox" name='location'/>ЮАО</label>
							<label><input type="checkbox" name='location'/>ЮЗАО</label>
							<label><input type="checkbox" name='location'/>ЗАО</label>
							<label><input type="checkbox" name='location'/>СЗАО</label>
							<label><input type="checkbox" name='location'/>ЗелАО</label>
							<label><input type="checkbox" name='location'/>ТАО</label>
							<label><input type="checkbox" name='location'/>НАО</label>
						</div>
					</details>
					<details className='filter__item'>
						<summary className='item__subtitle'>
							Характерные черты
						</summary>
						<div className='item__body'>
							<label><input type="checkbox" name='characteristics'/>Веселый</label>
							<label><input type="checkbox" name='characteristics'/>Стеснительный</label>
							<label><input type="checkbox" name='characteristics'/>Агрессивный</label>
						</div>
					</details>
				{/*</form>*/}
			</div>
		</div>
	)
}

export default Filter