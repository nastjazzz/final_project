import React, { useState } from 'react';

import './filter.css';
import './filter.transitions.css';

function Filter(props) {
	const [openFirst, setOpenFirst] = useState(false);
	const [menuHeightFirst, setMenuHeightFirst] = useState(21);
	const [menuHeightSecond, setMenuHeightSecond] = useState(21);

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
			<div className='back__button' onClick={() => {window.location.href = `/profile/${JSON.parse(window.localStorage['user']).id || 2}`}}>← Назад</div>
			<div className='filter__title'>
				Рекомендации
			</div>
			<div className='filter__subtitle'>
				Найдите своему питомцу компанию для прогулок
			</div>
			<div className='filter__items'>
				<form>
					{props.children}
				</form>
			</div>
		</div>
	)
}

export default Filter