import React from 'react'
import './profile.css'
import Sidebar from '../Sidebar/Sidebar'
import ProfileInfo from './ProfileInfo'
import { Route } from "react-router-dom";
import Settings from "../Settings/Settings";
import Search from "../Search/Search";
import Messages from "../Messages/Messages";

const Profile = (props) => {
	// debugger;
	// console.log('profile', props)
	return (
		<div className="content">
			<Sidebar/>
			<Route path='/profile' render={() => <ProfileInfo/>}/>

			<Route path='/messages' render={() => <Messages />}/>

			<Route path='/search' render={() => <Search/> }/>

			<Route path='/settings' render={() => <Settings/>}/>
		</div>
	)
}

export default Profile