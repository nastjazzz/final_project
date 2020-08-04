import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

const Login = (props) => {
	console.log('Login props', props)
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isReady, setReady] = useState(false);
	const isReg = props.match.path === "/registration" ? true : false;

	const onSubmit = (e) => {
		e.preventDefault();
		setReady(true);
	};

	useEffect (() => {
		// console.log("useEffect");
		if (!isReady) {
			return;
		}
		axios("#", {
			method: "post",
			user: {
				email: "papapa@gmail.com",
				password: "123456",
			},
		});
	});

	return (
		<form onSubmit={onSubmit}>  
				<Input 
					variant="outlined" 
					type="email" 
					placeholder="Enter your email" 
					value={email} 
					className="input" 
					onChange={(e) => setEmail(e.target.value)}
				/>
				<Input 
					variant="outlined" 
					type="password" 
					placeholder="Enter your password" 
					value={password} 
					className="input" 
					onChange={(e) => setPassword(e.target.value)}
				/>
				{isReg ? 
					<Input 
						variant="outlined" 
						type="password" 
						placeholder="Repeat your password" 
						value={password} 
						className="input" 
						onChange={(e) => setPassword(e.target.value)}
					/>
					: null}
					{ isReg ? 
					<Button variant="outlined" type="submit" className="btn">Зарегистрироваться</Button> :
					<Button variant="outlined" type="submit" className="btn">Войти</Button>
				}				
			
		</form>
	)
}

export default Login