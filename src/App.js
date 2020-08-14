import React from 'react'
import { Route, Switch } from 'react-router-dom'

import './App.css'
import Header from './components/Header/Header'
import Welcome from './components/Welcome/Welcome'
import Profile from './components/Profile/Profile'
import Footer from './components/Footer/Footer'
import Homepage from './components/Homepage/homepage'
import Recommendation from "./components/Search/Recommendation";

import Profile2 from "./components/Profile/Profile2";

function App() {
	return (
		<div className="App">
			<Header/>
			{/*<Switch>*/}
				<Route exact path={['/', '/login', '/registration']} render={(props) => <Welcome {...props}/>}/>
				<Route exact path='/profile/:id' render={(props) => <Profile2 {...props} />}/>
				<Route exact path='/search' component={Recommendation}/>
				<Route exact path={['/', '/map']} component={Homepage} />
			{/*</Switch>*/}
			<Footer/>
		</div>
	)
}

export default App
