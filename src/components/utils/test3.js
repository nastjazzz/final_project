let testState = {
    users:  [
        {
            "id": 1,
            "login": "test",
            "password": "testPassword",
            "email": "test@test.com",
            "firstName": "Анастасия",
            "lastName": "Замашнюк",
        },
        {
            "id": 2,
            "login":"tedst3",
            "password": "password3",
            "email": "test2@test2.com",
            "firstName": "Имя",
            "lastName": "Фамилия"
        }, {
            "id": 3,
            "login": "test3",
            "password": "password3",
            "email": "test2@test2.com",
            "firstName": "Имя",
            "lastName": "Фамилия"
        }
    ],
}
//если фильтр, то возвращается массив в объектом подошедшего юзера
//если их несколько, то несколько объектов
//если ничего не найдено,  то пустой массив
// let checkLoginsFilter = (state) => {
//     let arrOfLogins = state.users.filter(user => {
//         if (user.login === state.currentLogin) {
//             if (user.password === state.currentPassword) {
//                 return true;
//             }
//         } else {
//             return false
//         }
//     })
//     return arrOfLogins;
// }
// console.log(checkLoginsFilter(testState));

let loginData = {
    'currentLogin': 'test3',
    'currentPassword': 'password3'
}

let reverseCheckLoginFilter = (loginData, users) => {
    let arr = users.filter(user => {
        if (loginData.currentLogin === user.login) {
            if (loginData.currentPassword === user.password) {
                return true;
            }
        } else {
            return false;
        }
    })
    return arr;
}

console.log(reverseCheckLoginFilter(loginData, testState.users));

//если map, то возвращается массив true/false для всех пользователей
//если ничего не найдено,  то пустой массив
//если подошли несколько то в массиве будет больше true
// let checkLoginsMap = (state) => {
//     let arrOfLogins = state.users.map(user => {
//         if (user.login === state.currentLogin) {
//             if (user.password === state.currentPassword) {
//                 return true;
//             }
//         } else {
//             return false
//         }
//     })
//     return arrOfLogins;
// }

// console.log(checkLoginsMap(testState));