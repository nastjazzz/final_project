import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import './filter.css';
import './filter.transitions.css';
import Parameter from './components/parameter/parameter';
import ParametersBlock from './components/parametersBlock/parametersBlock';

function Filter({getState, onChangeCheckboxes}) {
	const [openFirst, setOpenFirst] = useState(false);
	const [openSecond, setOpenSecond] = useState(false);

	const [menuHeightFirst, setMenuHeightFirst] = useState(21);
	const [menuHeightSecond, setMenuHeightSecond] = useState(21);

	let users = getState.users;
	const types = React.useMemo(() => [...new Set(users.map(u => u.pets.type))], [users])
	console.log('types:::::',types)
	function calcHeightFirst(el) {
		if (openFirst) {
			const height = el.offsetHeight + 26;
        	setMenuHeightFirst(height);	
		} else {
			setMenuHeightFirst(21)
		}
	}
	
	function calcHeightSecond(el) {
		if (openFirst) {
			const height = el.offsetHeight + 26;
        	setMenuHeightSecond(height);	
		} else {
			setMenuHeightSecond(21)
		}
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
				<form onChange={(e) => onChangeCheckboxes(e)}>

					<ParametersBlock title='Пол'>
						<Parameter name='gender female'>Девочка</Parameter>
						<Parameter name='gender male'>Мальчик</Parameter>
					</ParametersBlock>

					<ParametersBlock title='Возраст'>
						<Parameter name='age 1'>Меньше 1 года</Parameter>
						<Parameter name='age 1-3'>От 1 до 3 лет</Parameter>
						<Parameter name='age 4-8'>От 4 до 8 лет</Parameter>
						<Parameter name='age 8'>Больше 8 лет</Parameter>
					</ParametersBlock>

					{/*<ParametersBlock title='Порода'>*/}
					{/*	<Parameter name='breed ovcharka'>Овчарка</Parameter>*/}
					{/*	<Parameter name='breed retriver'>Ретривер</Parameter>*/}
					{/*	<Parameter name='breed pitbul'>Питбуль</Parameter>*/}
					{/*	<Parameter name='breed haski'>Хаски</Parameter>*/}
					{/*	<Parameter name='breed labrador'>Лабрадор</Parameter>*/}
					{/*	<Parameter name='breed taksa'>Такса</Parameter>*/}
					{/*</ParametersBlock>*/}

					<ParametersBlock title='Тип'>
						<Parameter name='type small'>Мелкая</Parameter>
						<Parameter name='type medium'>Средняя</Parameter>
						<Parameter name='type large'>Крупная</Parameter>
					</ParametersBlock>

					<ParametersBlock title='Район'>
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
					</ParametersBlock>
				</form>
			</div>
		</div>
	)
}

export default Filter