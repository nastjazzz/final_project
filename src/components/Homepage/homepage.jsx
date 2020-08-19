import React, {useEffect, useState} from 'react';
import './homepage.module.css';
import { YMaps, Map, Placemark, ZoomControl } from 'react-yandex-maps';
import styles from './homepage.module.css';
import axios from 'axios';

import defaultDogPhoto from '../../media/defaultDogPhoto.png';

const windowWidth = window.innerWidth;

const mapData = {
    Y: windowWidth >= 950 ? 38 : (windowWidth >= 660 ? 37.85 : (windowWidth > 500 ? 37.77 : 37.6)),
    X: 55.74,
    zoom: 9,
  };

window.onresize = function() {
    if (window.innerWidth <= 950) {
        mapData.center = [55, 38];
    }
};

function Homepage() {
    //all users from server
    const [users, setUsers] = useState([]);
    
    let getUsersFromServer = () => {
		axios.get('/api/users/')
			.then(resp => {
				let data = resp.data.users; //получаем объект с пользователями с сервера
				setUsers(data) //записываем их в массив
			})
			.catch(error => console.log('error [getUsersFromServer]', error))
    };
    
    const getAgeString = (age) => {
        if (age == 0) return `${age} лет`;
        else if (age == 1) return `${age} год`;
        else if (age >= 2 && age <= 4) return `${age} года`;
        else return `${age} лет`;
    };

	useEffect(() => {
		getUsersFromServer();
	}, []);

    return (
        <div className={styles.homepage_wrapper}>
            <div className={styles.homepage_content}>
                <YMaps>
                    <div className={styles.map_container}>
                        <div className={styles.map_wrapper}>
                            <div className={styles.map_description_wrapper}>
                                <div className={styles.map_main_info}>Найди себе питомца, с которым ты хочешь погулять в Москве</div>
                                <div className={styles.map_sub_info_wrapper}>
                                    {/* Первая версия сообщения */}
                                    <nav className={styles.moreThan500px}>
                                        <div className={styles.map_sub_info}>Они уже готовы к прогулке</div>
                                    </nav>

                                    {/* Вторая версия сообщения */}
                                    <nav className={styles.lessThan500px}>
                                        <div className={styles.map_sub_info}>
                                            <span className={styles.arrow}>↓</span> Они уже готовы к прогулке <span className={styles.arrow}>↓</span>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                            <Map defaultState={{ 
                                center: [mapData.X, mapData.Y], 
                                zoom: mapData.zoom, controls: [] }} width='100%' height='100%' id={styles.map}>
                                {users.map(user => <Placemark geometry={user.location.coords} options={{ iconColor: '#2539af' }} 
                                                            properties={{balloonContentHeader: `${user.pets.name} ` + 
                                                                                                `(Хозяин - <a href='/profile/${user.id}'` + 
                                                                                                `style='color: #2539af;text-decoration: underline'>` +
                                                                                                    `${user.firstName} ${user.lastName}` + 
                                                                                                `</a>)`,
                                                            balloonContentBody: 
                                                                    `<img src=${user.pets.photo || defaultDogPhoto} style='height: 175px'>` +
                                                                    `<div>${user.pets.gender[0].toUpperCase() + user.pets.gender.slice(1)}, ${user.pets.breed}, ${getAgeString(user.pets.age)}</div>`,
                                                            balloonContentFooter: `<a href='/profile/${user.id}' style='color: #2539af;text-decoration: underline'>Связаться</a>` }}
                                                            modules={['geoObject.addon.balloon', 'geoObject.addon.hint']} />)}
                                <ZoomControl options={{ float: 'left' }} />
                            </Map>
                        </div>
                    </div>
                </YMaps>
            </div>
        </div>
    );
}

export default Homepage;
