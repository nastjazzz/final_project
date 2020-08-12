import React, {useState} from 'react'
import Header from './components/Header/Header'
import Welcome from './components/Welcome/Welcome'
import './App.css'
import Footer from './components/Footer/Footer'
import Profile from './components/Profile/Profile'
import {Link, Redirect, Route} from 'react-router-dom'
import {BrowserRouter, Router, Switch} from "react-router-dom";
import {history} from "./index";


export const AuthError = () => {
	return (
		<div>
			Для просмотра данной страницы требуется авторизоваться
			<Link to={'/'}>login</Link>
		</div>
	)
}

function App() {
	const [isAuth, setIsAuth] = useState([false, 0]);

	return (
		<Router history={history}>
			<div className="App">
				{/*<div className="content__wrapper">*/}
					<Route path='/' render={() => !isAuth[0] && <Welcome
						setIsAuth={setIsAuth}
						AuthError={AuthError} />}
					/>
					<Route exact path="/profile/:id" render={() => isAuth[0] && <Profile userId={isAuth[1]}/> }
					/>
					<Route path={'/auth/login'} component={AuthError} />
				{/*</div>*/}
				<Footer/>
			</div>
		</Router>
	)
}

export default App
