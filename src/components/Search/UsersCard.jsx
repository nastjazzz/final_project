import React from "react";
import dogPhoto from "../dogPhoto.jpg";

const UsersCards = ({ getState }) => {
    let usersFromServer = [...getState.users];
    // console.log('usersFromServer', usersFromServer);

//одна карточка собаки
    let cardItem = usersFromServer.map(user => {
        return (
            <div className='card__wrapper' key={user.id}>
                <div className='pets-info'>
                    <div className='pets-info__name'>
                        {user.pets.name}, {user.pets.age}
                    </div>
                    <div className='pets-info__photo'>
                        <img src={dogPhoto} alt="user`s dog" />
                    </div>
                </div>
                <div className='user-info'>
                    <div className='user-info__name'>
                        Хозяин: {user.firstName}
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