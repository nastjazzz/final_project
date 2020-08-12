import React from 'react'
import Header from './components/Header/Header'
// import Welcome from './components/Welcome/Welcome'
import './App.css'
import Footer from './components/Footer/Footer'
import Profile from './components/Profile/Profile'
import Homepage from './components/Homepage/homepage'


function App(props) {
	// console.log('app', props);
	return (
		<div className="App">
			<Header/>
			<div className="content__wrapper">
				{/*<Welcome/>*/}
				{/* <Profile/> */}
				<Homepage />
			</div>
			<Footer/>
		</div>
	)
}

export default App
