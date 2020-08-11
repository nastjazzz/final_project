import React from 'react';
import './homepage.module.css';
import { YMaps, Map, Placemark, ZoomControl } from 'react-yandex-maps';
import styles from './homepage.module.css';

const mapData = {
    center: [55.74, 37.2],
    zoom: 10,
  };
  
  const coordinates = [
    [55.684758, 37.738521],
    [57.684758, 39.738521]
  ];

function Homepage() {
    return (
        <div className={styles.homepage_wrapper}>
            <div className={styles.homepage_content}>
                <YMaps>
                    <div>
                        <Map defaultState={{ center: mapData.center, zoom: mapData.zoom, controls: [] }} width='100%' height='500px' id={styles.map}>
                            {coordinates.map(coordinate => <Placemark geometry={coordinate} options={{ iconColor: '#2539af' }} />)}
                            <div className={styles.map_description_wrapper}>
                                <div className={styles.map_main_info}>Найди себе питомца, с которым ты хочешь погулять в Москве!</div>
                                <div className={styles.map_sub_info}>Они уже готовы к прогулке!</div>
                            </div>
                        </Map>
                    </div>
                </YMaps>
            </div>
        </div>
    );
}

export default Homepage;
