import React from 'react';
import './footer.css';

const Footer = () => {
	return (
		<footer className='footer'>
		<div className='footer_container'>
			<div className="company_logo_wrapper">
				<div className='company_logo'>
					<a href='https://beeinterns.ru/'>
						{'<Bee/>'} <br /> {'<Interns/>'}
					</a>
				</div>
			</div>
			<div className='developed_wrapper'>
				<div className='developed_title'>Разработали:</div>
				<div className='developers_wrapper'>
					<div className='developer'><a href='https://github.com/nastjazzz'>Анастасия Замашнюк</a></div>
					<div className='developer'><a href='https://github.com/inezav'>Инна Федяева</a></div>
					<div className='developer'><a href='https://github.com/Volokhov-mda'>Никита Волохов</a></div>
				</div>
			</div>
		</div>
		</footer>
	)
}

export default Footer