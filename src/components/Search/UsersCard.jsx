import React from "react";
import dogPhoto from "../dogPhoto.jpg";
import {NavLink} from "react-router-dom";

let dogsAge = (number) => {
    if (number < 1) {
        return `${number}м`
    } else if (number >= 1 && number < 5) {
        return `${number}г`
    } else {
        return `${number}л`
    }
}

const UsersCards = ({ getState }) => {
    let usersFromServer = [...getState.users];
    // console.log('usersFromServer', usersFromServer);

//одна карточка собаки
    let cardItem = usersFromServer.map(user => {
        return (
            <div className='card__wrapper' key={user.id}>
                <div className='pets-info'>
                    <div className='pets-info__name'>
                        <NavLink to={'/profile/' + user.id}>
                            <span className='link__name'>{user.pets.name}, {dogsAge(user.pets.age)}</span>
                        </NavLink>
                    </div>
                    <div className='pets-info__photo'>
                        <img src={user.pets.photo || dogPhoto} alt="user`s dog" />
                    </div>
                </div>
                <div className='user-info'>
                    <div className='user-info__name'>
                        <NavLink to={'/profile/' + user.id}> Хозяин: {user.firstName}</NavLink>
                    </div>
                    <div className='user-info__location'>
                        Гуляют в {user.location.district}
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className='results__wrapper'>
            {cardItem}
        </div>
    )
}

export default UsersCards;