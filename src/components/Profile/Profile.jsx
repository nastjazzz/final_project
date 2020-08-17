import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Route } from "react-router-dom";

import './profile.css'
import Sidebar from '../Sidebar/Sidebar'
import Messages from "../Messages/Messages";
import Recommendation from "../Recommendation/Recommendation";
import Settings from "../Settings/Settings";
import ProfileInfoTest from './ProfileInfoTest'

const Profile = ({...props}) => {
	const [user, setUser] = useState({});
	console.log('15:  user Profile = ', user);

//если нет, значит null
//если есть, значит не null
	const authUser = JSON.parse(localStorage.getItem("user")); //если есть, тогда это объект с авториз пользователем
	// console.log('20:  check = ',check);

	const id = props.match.params.id;
	console.log('23: profile id = ',id);

	useEffect(() => {
		axios.get(`/api/profile/${id}`)
			.then(response => {
				console.log('28:  USER ID RESP', response);
				let data = response.data; //object
				setUser(data);
			})
	}, [id]);

	return (
		<div className="content">
			{authUser !== null ? <Sidebar/> : null}
			{user.id !== undefined ? <ProfileInfoTest user={user} {...props} /> : null}
			{/*<Route path={`/profile/${id}/messages`} exact render={() => <Messages/>}/>*/}
			{/*<Route path={`/profile/${id}/settings`} render={() => <Settings/>}/>*/}
			<Route path='/search' exact render={() => <Recommendation/>}/>

		</div>
	)
}

export default Profile
