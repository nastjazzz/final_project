import React, {useEffect, useState} from 'react'
import './profile.css'
import Sidebar from '../Sidebar/Sidebar'
import ProfileInfoTest from './ProfileInfoTest'
import { Route } from "react-router-dom";
import Settings from "../Settings/Settings";
import Recommendation from "../Search/Recommendation";
import Messages from "../Messages/Messages";
import axios from 'axios'
// import {history} from "../../index";
import Header from "../Header/Header";

const Profile = ({id, ...props}) => {
	// console.log('PROFILE PROPS', props);
	// console.log('PROFILE history', history);
	// const userId = props.match.params.id;
	// console.log(userId);
	console.log('profile id',id);
	console.log('profile props',props);

	const [userData, setUserData] = useState([]);
	console.log(userData);

	useEffect(() => {
		axios.get(`/api/profile/${id}`)
			.then(response => {
				console.log('USER ID RESP', response);
				let data = response.data;
				setUserData(data);
			})
	}, [id]);

	return (
		<>
			<Header />
			<div className="content">
				<Sidebar userId={id}/>

				<Route path={`/profile/${id}`} exact render={() =>
					<ProfileInfoTest user={userData}/>} />

				<Route path={`/profile/${id}/messages`} exact render={() => <Messages/>}/>
				<Route path='/profile/search' exact render={() => <Recommendation/> }/>


				<Route path={`/profile/${id}/settings`} render={() => <Settings/>}/>
			</div>
		</>
	)
}

export default Profile