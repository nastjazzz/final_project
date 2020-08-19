import React, { useState, useEffect } from 'react';

import UserInfo from './../../UserContext.js'

function AuthContainer(props) {
    const [authHash, setAuthHash] = useState(JSON.parse(window.localStorage.getItem('user')));

    useEffect(() => {
        const updateAuthHash = () => setAuthHash(JSON.parse(window.localStorage.getItem('authHash')));
        console.log('произошло', authHash);
        window.addEventListener('storage', updateAuthHash);
        return () => window.removeEventListener('storage', updateAuthHash);
    }, [])

    return (
        <UserInfo.Provider value={authHash}>
            {props.children}
        </UserInfo.Provider>
    );
}

export default AuthContainer;