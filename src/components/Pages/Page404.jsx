import React from "react";
import './pages.css'
import {NavLink} from "react-router-dom";

export const Page404 = ({...props}) => {
    return (
        <main className='page-error__wrapper'>
            <div className='page-error__content'>
                <div className='page-error'><strong>404</strong> <br/> Страница не найдена</div>
                <p>К сожалению, страница, которую вы ищете, не существует!</p>
                <div className='page-error_button'>
                    <NavLink to={'/'}>Вернуться на главную</NavLink>
                </div>
                <div className='page-error_button'>
                    <button onClick={() => {props.history.goBack()}}>Назад</button>
                </div>
            </div>
        </main>
    )
}