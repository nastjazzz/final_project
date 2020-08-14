import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Route } from "react-router-dom";

import './profile.css'
import Sidebar from '../Sidebar/Sidebar'
import Messages from "../Messages/Messages";
import Recommendation from "../Search/Recommendation";
import Settings from "../Settings/Settings";
import ProfileInfoTest from './ProfileInfoTest'

const Profile2 = ({...props}) => {

	// let user = {};
	const [user, setUser] = useState({});
	console.log('15:  user Profile = ', user);

//если нет, значит null
//если есть, значит не null
	const check = localStorage.getItem("user"); //если есть, тогда это объект с пользователем
	console.log('20:  check = ',check);

	let id = props.match.params.id;
	console.log('23: profile id = ',id);

	useEffect(() => {
		axios.get(`/api/profile/${id}`)
			.then(response => {
				console.log('28:  USER ID RESP', response);
				let data = response.data; //object
				setUser(data);
				// user = data;
			})
	}, [id]);

	return (
		<div className="content">
			{check !== null ? <Sidebar /> : null}
			{/*<Sidebar />*/}
			{ user.id !== undefined ?  <ProfileInfoTest id={id} user={user}/> : null}

			{/*<Route path={`/profile/${id}/messages`} exact render={() => <Messages/>}/>*/}
			{/*<Route path={`/profile/${id}/settings`} render={() => <Settings/>}/>*/}
			<Route path='/search' exact render={() => <Recommendation/>}/>

		</div>

	)
}

export default Profile2
