import React from 'react'
import './filter.css'

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
							<label>
								<input
									type="checkbox"
									name='gender female'
								/>
								Девочка
							</label>
							<label>
								<input
									type="checkbox"
									name='gender male'
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
							<label><input type="checkbox" name='age 1'/>меньше 1 года</label>
							<label><input type="checkbox" name='age 1-3'/>1 - 3</label>
							<label><input type="checkbox" name='age 4-8'/>4 - 8</label>
							<label><input type="checkbox" name='age 8'/>больше 8 лет</label>
						</div>
					</details>
					<details className='filter__item'>
						<summary className='item__subtitle'>
							Порода
						</summary>
						<div className='item__body'>
							<label><input type="checkbox" name='breed ovcharka'/>Овчарка</label>
							<label><input type="checkbox" name='breed retriver'/>Ретривер</label>
							<label><input type="checkbox" name='breed pitbul'/>Питбуль</label>
							<label><input type="checkbox" name='breed haski'/>Хаски</label>
							<label><input type="checkbox" name='breed labrador'/>Лабрадор</label>
							<label><input type="checkbox" name='breed taksa'/>Такса</label>
						</div>
					</details>
					<details className='filter__item'>
						<summary className='item__subtitle'>
							Район
						</summary>
						<div className='item__body'>
							<label><input type="checkbox" name='location CAO'/>ЦАО</label>
							<label><input type="checkbox" name='location SAO'/>САО</label>
							<label><input type="checkbox" name='location SVAO'/>СВАО</label>
							<label><input type="checkbox" name='location VAO'/>ВАО</label>
							<label><input type="checkbox" name='location YVAO'/>ЮВАО</label>
							<label><input type="checkbox" name='location YAO'/>ЮАО</label>
							<label><input type="checkbox" name='location YZAO'/>ЮЗАО</label>
							<label><input type="checkbox" name='location ZAO'/>ЗАО</label>
							<label><input type="checkbox" name='location SZAO'/>СЗАО</label>
							<label><input type="checkbox" name='location ZelAO'/>ЗелАО</label>
							<label><input type="checkbox" name='location TAO'/>ТАО</label>
							<label><input type="checkbox" name='location NAO'/>НАО</label>
						</div>
					</details>
				</form>
			</div>
		</div>
	)
}

export default Filter