import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Route } from "react-router-dom";

import './profile.css'
import Header from "../Header/Header";
import Sidebar from '../Sidebar/Sidebar'
import Messages from "../Messages/Messages";
import Recommendation from "../Search/Recommendation";
import Settings from "../Settings/Settings";
import ProfileInfoTest from './ProfileInfoTest'

const Profile = ({id, ...props}) => {
	const [userData, setUserData] = useState([]);
	console.log('userData Profile', userData);

	console.log('profile id',id);
	console.log('profile props',props);

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
				<Route path={`/profile/${id}/settings`} render={() => <Settings/>}/>

				<Route path='/profile/search' exact render={() => <Recommendation/> }/>

			</div>
		</>
	)
}

export default Profile
