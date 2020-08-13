import React from 'react';
import './filter.css';
import Parameter from './components/parameter/parameter';

function Filter({getState, onChangeCheckboxes}) {
	return (
		<div className='filter'>
			<div className='filter__title'>
				Рекомендации
			</div>
			<div className='filter__subtitle'>
				Найдите своему питомцу компанию для прогулок
			</div>
			<div className='filter__items'>
				<form onChange={(e) => onChangeCheckboxes(e)}>
					<details className='filter__item'>
						<summary className='item__subtitle'>
							Пол
						</summary>
						<div className='item__body' >
							<Parameter name='gender female'>Девочка</Parameter>
							<Parameter name='gender male'>Мальчик</Parameter>
						</div>
					</details>
					<details className='filter__item'>
						<summary className='item__subtitle'>
							Возраст
						</summary>
						<div className='item__body'>
							<Parameter name='age 1'>Меньше 1 года</Parameter>
							<Parameter name='age 1-3'>От 1 до 3 лет</Parameter>
							<Parameter name='age 4-8'>От 4 до 8 лет</Parameter>
							<Parameter name='age 8'>Больше 8 лет</Parameter>
						</div>
					</details>
					<details className='filter__item'>
						<summary className='item__subtitle'>
							Порода
						</summary>
						<div className='item__body'>
							<Parameter name='breed ovcharka'>Овчарка</Parameter>
							<Parameter name='breed retriver'>Ретривер</Parameter>
							<Parameter name='breed pitbul'>Питбуль</Parameter>
							<Parameter name='breed haski'>Хаски</Parameter>
							<Parameter name='breed labrador'>Лабрадор</Parameter>
							<Parameter name='breed taksa'>Такса</Parameter>
						</div>
					</details>
					<details className='filter__item'>
						<summary className='item__subtitle'>
							Район
						</summary>
						<div className='item__body'>
							<Parameter name='location CAO'>ЦАО</Parameter>
							<Parameter name='location SAO'>САО</Parameter>
							<Parameter name='location SVAO'>СВАО</Parameter>
							<Parameter name='location VAO'>ВАО</Parameter>
							<Parameter name='location YVAO'>ЮВАО</Parameter>
							<Parameter name='location YAO'>ЮАО</Parameter>
							<Parameter name='location YZAO'>ЮЗАО</Parameter>
							<Parameter name='location ZAO'>ЗАО</Parameter>
							<Parameter name='location SZAO'>СЗАО</Parameter>
							<Parameter name='location ZelAO'>ЗелАО</Parameter>
							<Parameter name='location TAO'>ТАО</Parameter>
							<Parameter name='location NAO'>НАО</Parameter>
						</div>
					</details>
				</form>
			</div>
		</div>
	)
}

export default Filter