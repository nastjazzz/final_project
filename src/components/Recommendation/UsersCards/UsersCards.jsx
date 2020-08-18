import React from "react";
import './usersCards.css'
import defaultDogPhoto from '../../../media/defaultDogPhoto.png';
import UserInfo from "./components/UserInfo";
import DogInfo from "./components/DogInfo";
import SorryFilter from "../Help/SorryFilter";

const UsersCards = ({users}) => {
    console.log('UsersCards', users);
    console.log('UsersCards', users.length);

    return (
        <div className='results__wrapper'>
            {
                users.length > 0 ?
                    users.map(user => {
                        return (
                            <div className='card__wrapper' key={user.id}>
                                <DogInfo
                                    id={user.id}
                                    age={user.pets.age}
                                    dogName={user.pets.name}
                                    photo={user.pets.photo || defaultDogPhoto}/>
                                <UserInfo
                                    id={user.id}
                                    userName={user.firstName}
                                    district={user.location.district}/>
                            </div>
                        )
                    }) : <SorryFilter/>
            }
        </div>
    )
}

export default UsersCards;