import React from 'react'
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";

const Buttons = () => {
	return (
		<div className='buttons'>
			<Link to='/login'>
				<Button className="button" variant="outlined">Login</Button>
			</Link>
			<Link to='/registration'>
				<Button className="button" variant="outlined">Registration</Button>
			</Link>
		</div>
	)
}

export default Buttons