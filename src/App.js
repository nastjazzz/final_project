import React, {useState} from 'react'
import { history } from "./index";
import { Route, Router } from 'react-router-dom'
import { PrivateRoute } from "./components/Router/PrivateRoute";
import './App.css'
import Header from './components/Header/Header'
import Welcome from './components/Welcome/Welcome'
import Profile from './components/Profile/Profile'
import Footer from './components/Footer/Footer'

function App() {
	//[false,0] - unAuth, [true,id] - auth
	const [isAuth, setIsAuth] = useState([false, 0]);

	return (
		<Router history={history}>
			<div className="App">
				<Route path='/' render={() => !isAuth[0] && <Welcome setIsAuth={setIsAuth}/>}/>
				<PrivateRoute path='/profile/:id' isAuth={isAuth} component={Profile} />
				<Footer/>
			</div>
		</Router>
	)
}

export default App


//BrowserRouter ignores the history prop as it handles the history automatically for you.
// If you need access to the history outside of a react component, then using Router should be fine.