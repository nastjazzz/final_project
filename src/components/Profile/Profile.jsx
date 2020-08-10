import React from 'react'
import './profile.css'
import Sidebar from '../Sidebar/Sidebar'
import ProfileInfo from './ProfileInfo'
import { Route } from "react-router-dom";
import Settings from "../Settings/Settings";
// import Recommendation from "../Search/Recommendation";
import Messages from "../Messages/Messages";
import Recommendation from "../Search/Recommendation";

const Profile = (props) => {
	// debugger;
	// console.log('profile', props)
	return (
		<div className="content">
			<Sidebar/>
			<Route path='/profile' render={() => <ProfileInfo/>}/>

			<Route path='/messages' render={() => <Messages />}/>

			<Route path='/search' render={() => <Recommendation/> }/>

			<Route path='/settings' render={() => <Settings/>}/>
		</div>
	)
}

export default Profile