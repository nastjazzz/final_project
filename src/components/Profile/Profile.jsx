import React, {useEffect, useState} from 'react'
import './profile.css'
import Sidebar from '../Sidebar/Sidebar'
import ProfileInfo from './ProfileInfo'
import { Route } from "react-router-dom";
import Settings from "../Settings/Settings";
import Recommendation from "../Search/Recommendation";
import Messages from "../Messages/Messages";
import axios from 'axios'
// import {history} from "../../index";
import Header from "../Header/Header";

const Profile = ({userId}) => {
	// console.log('PROFILE PROPS', props);
	// console.log('PROFILE history', history);
	// const userId = props.match.params.id;
	console.log(userId);

	const [userData, setUserData] = useState([]);
	console.log(userData);

	useEffect(() => {
		axios.get(`/api/profile/${userId}`)
			.then(response => {
				console.log('USER ID RESP', response);
				let data = response.data;
				setUserData(data);
			})
	}, [userId]);

	return (
		<>
			<Header/>
			<div className="content">
				<Sidebar userId={userId}/>

				<Route path={`/profile/${userId}`} exact render={() =>
					<ProfileInfo user={userData}/>} />

				<Route path={`/profile/${userId}/messages`} exact render={() => <Messages/>}/>
				<Route path='/profile/search' exact render={() => <Recommendation/> }/>


				{/*<Route path='/settings' render={() => <Settings/>}/>*/}
			</div>
		</>
	)
}

export default Profile