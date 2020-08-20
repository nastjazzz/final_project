module.exports = function checkLoginData(loginData, users){
    let checkUser = users.filter(user => {
        if (loginData.login === user.login) {
            if (loginData.password === user.password) {
                return true;
            }
        } else {
            return false;
        }
    })
    return checkUser;
}