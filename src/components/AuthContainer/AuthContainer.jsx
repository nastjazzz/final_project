import React, { useState, useEffect } from 'react';

import UserInfo from './../../UserContext.js'

function AuthContainer(props) {
    const [authHash, setAuthHashState] = useState(JSON.parse(window.localStorage.getItem('user')));

    // useEffect(() => {
    //     const updateAuthHash = () => setAuthHash(JSON.parse(window.localStorage.getItem('user')));
    //     console.log('произошло', authHash);
    //     window.addEventListener('storage', updateAuthHash);
    //     return () => window.removeEventListener('storage', updateAuthHash);
    // }, [])

    const setAuthHash = (newHash) => {
        window.localStorage.getItem('user', JSON.stringify(newHash));
        setAuthHashState(newHash);
    }

    return (
        <UserInfo.Provider value={[authHash, setAuthHash]}>
            {props.children}
        </UserInfo.Provider>
    );
}

export default AuthContainer;