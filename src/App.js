import React, {useState} from 'react'
import { history } from "./index";
import { Route, Router, Switch } from 'react-router-dom'
import cookie from 'react-cookie'

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
		// <Router history={history}>
		<div className="App">
			<Header/>
			<Route exact path={['/', '/login', '/registration']} render={(props) => <Welcome {...props}/>}/>
			{/*<Route exact path='/profile/:id' render={(props) => <Profile {...props} />}/>*/}
			<Route exact path='/profile/:id' render={(props) => <Profile2 {...props} />}/>

			<Route path='/search' exact render={() => <Recommendation/>}/>

			<Route path='/map' render={() => <Homepage/>}/>
			<Footer/>
		</div>
		// </Router>
	)
}

export default App


//BrowserRouter ignores the history prop as it handles the history automatically for you.
// If you need access to the history outside of a react component, then using Router should be fine.