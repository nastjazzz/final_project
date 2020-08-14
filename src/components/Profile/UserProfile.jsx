import React from "react";
import {Link} from "react-router-dom";

const UserProfile = () => {
    return (
        <div>
            проверка route
            <Link to={'/user/10'}>Check</Link>
        </div>
    )
}

export default UserProfile