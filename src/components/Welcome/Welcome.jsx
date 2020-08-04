import React from 'react'
import Auth from './Form/Auth'
import './welcome.css'
import "fontsource-roboto"
import {Typography} from '@material-ui/core';


const Title = () => {
	return (
		<div className="title">
			<Typography variant="h2">
				Выбрать компанию себе и любимому питомцу для прогулок!
			</Typography>
		</div>
	)
}

const Welcome = () => {
	return (
		<div className="main">
			<Title />
			<Auth />
		</div>
	)
}

export default Welcome

export default Welcome
