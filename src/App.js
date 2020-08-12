import React, {useState} from 'react'
import Header from './components/Header/Header'
import Welcome from './components/Welcome/Welcome'
import './App.css'
import Footer from './components/Footer/Footer'
import Profile from './components/Profile/Profile'
import {Link, Redirect, Route} from 'react-router-dom'
import {BrowserRouter, Router, Switch} from "react-router-dom";
import {history} from "./index";

const PrivateRoute = ({ component: Component, isAuth, ...props }) => {
debugger;
	console.log('rest??', props);
	// console.log('PrivateRoute.Comp ===', Component);
	return (
		// <div>test</div>
		<Route {...props} render={(props) => (
			isAuth[0] === true
				? <Component {...props} id={isAuth[1]} />
				: <Redirect to={{
					pathname: '/login',
					state: { from: props.location }
				}} />
		)} />
	)
}

function App() {
	const [isAuth, setIsAuth] = useState([false, 0]);

	return (
		<Router history={history}>
		{/*// <BrowserRouter >*/}
			<div className="App">
				<Route path='/' render={() => !isAuth[0] && <Welcome setIsAuth={setIsAuth} /> } />
				<PrivateRoute path='/profile/:id' isAuth={isAuth} component={Profile} />
				{/*<div className="content__wrapper">*/}
				{/*	<Route path='/' render={() => !isAuth[0] && <Welcome*/}
				{/*		setIsAuth={setIsAuth}*/}
				{/*		AuthError={AuthError} />}*/}
				{/*	/>*/}
				{/*	<Route exact path="/profile/:id" render={() => isAuth[0] && <Profile userId={isAuth[1]}/> }*/}
				{/*	/>*/}
				{/*</div>*/}
				<Footer/>
			</div>
		{/*// </BrowserRouter>*/}

		</Router>
	)
}

export default App
