import React from 'react'
import { Route, Switch } from 'react-router-dom'

import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Profile from "./components/Profile/Profile";
import Recommendation from "./components/Recommendation/Recommendation";
// import Homepage from './components/Homepage/homepage'
import Footer from './components/Footer/Footer'
import {Page404} from "./components/Pages/Page404";
import AuthContainer from './components/AuthContainer/AuthContainer'

import UserInfo from './UserContext';

function App() {
	return (
		<AuthContainer>
		<div className="App">
			<Header/>
			<Switch>
				<Route exact path={['/', '/login', '/registration']} render={(props) => <Home {...props}/>}/>
				<Route exact path='/profile/:id' render={(props) => <Profile {...props} />}/>
				<Route exact path='/search' component={Recommendation} />
				{/*<Route exact path={'/'} component={Homepage} />*/}
				<Route component={Page404} />
			</Switch>
			<Footer/>
		</div>
		</AuthContainer>
	)
}

export default App
