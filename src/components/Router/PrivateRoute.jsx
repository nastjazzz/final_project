import {Redirect, Route} from "react-router-dom";
import React from "react";

export const PrivateRoute = ({ component: Component, isAuth, ...props }) => {
    // debugger;
    console.log('PrivateRoute props', props);
    return (
        // <div>test</div>
        <Route {...props} render={(props) => (
            isAuth[0] === true
                ? <Component {...props} id={isAuth[1]}/>
                : <Redirect to={{
                    pathname: '/',
                    state: {from: props.location}
                }}/>
        )}/>
    )
}