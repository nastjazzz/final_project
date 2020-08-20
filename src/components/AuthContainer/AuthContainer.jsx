import React, { useState, useEffect } from 'react';

import UserInfo from './../../UserContext.js'

function AuthContainer(props) {
    const [authHash, setAuthHashState] = useState(JSON.parse(window.localStorage.getItem('user')));

    const setAuthHash = (newHash) => {
        window.localStorage.setItem('user', JSON.stringify(newHash));
        setAuthHashState(newHash);
    }

    return (
        <UserInfo.Provider value={[authHash, setAuthHash]}>
            {props.children}
        </UserInfo.Provider>
    );
}

export default AuthContainer;