import React from 'react'
import { Route, Switch } from 'react-router-dom'

import './App.css'
import Header from './components/Header/Header'
import Welcome from './components/Welcome/Welcome'
import Profile from "./components/Profile/Profile";
import Recommendation from "./components/Recommendation/Recommendation";
import Homepage from './components/Homepage/homepage'
import Footer from './components/Footer/Footer'
import {Page404} from "./components/Pages/Page404";

function App() {
	return (
		<div className="App">
			<Header/>
			<Switch>
				<Route exact path={['/', '/login', '/registration']} render={(props) => <Welcome {...props}/>}/>
				<Route exact path='/profile/:id' render={(props) => <Profile {...props} />}/>
				<Route exact path='/search' component={Recommendation} />
				<Route exact path={['/', '/map']} component={Homepage} />
				<Route path='*' component={Page404} />
			</Switch>
			<Footer/>
		</div>
	)
}

export default App
