import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Route } from "react-router-dom";

import './profile.css'
import Sidebar from '../Sidebar/Sidebar'
import Messages from "../Messages/Messages";
import Recommendation from "../Recommendation/Recommendation";
import Settings from "../Settings/Settings";
import ProfileInfo from './ProfileInfo';
import BigPreloader from "../Preloader/BigPreloader";
import {Page404} from "../Pages/Page404";

const Profile = ({...props}) => {
	const id = props.match.params.id;
	const [user, setUser] = useState({});
	const [pathError, setPathError] = useState(false);
	const authUser = JSON.parse(localStorage.getItem('user')); //если есть, тогда это объект с авториз пользователем

	useEffect(() => {
		setPathError(false);
		axios.get(`/api/profile/${id}`)
			.then(response => {
				console.log('28:  USER ID RESP', response);
				let data = response.data; //object
				setUser(data);
			})
			.catch(error => {
				console.log('profile-error', error);
				setPathError(true);
			})
	}, [id]);

	return (
		<div className="content_wrapper">
			{
				pathError ? <Page404 {...props} /> :
					<div className="content">
						{authUser !== null ? <Sidebar/> : null}
						{
							user.id !== undefined ?
								<ProfileInfo user={user} {...props} /> : <BigPreloader/>
						}
						{/*<Route path={`/profile/${id}/messages`} exact render={() => <Messages/>}/>*/}
						{/*<Route path={`/profile/${id}/settings`} render={() => <Settings/>}/>*/}
						<Route path='/search' exact render={() => <Recommendation/>}/>
					</div>
			}
		</div>
	)
}

export default Profile
