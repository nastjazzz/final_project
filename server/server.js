const express = require('express');
const path = require('path'),
    bodyParser = require('body-parser');
const port = 3001;
const fs = require('fs')
const app = express();

// let DATA_JSON = JSON.parse(fs.readFileSync('./response-users.json', 'utf8'))
let TEST_DATA_JSON = JSON.parse(fs.readFileSync('./test.json', 'utf8'))

//хранилище данных для всех пользователей
// пока до конца я еще не знаю что именно мы будем использовать
//на выбор в get запросе исп либо USERS_DATA, либо response-users.json
// const USERS_DATA = users;

app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, '../my-app/build')));


app.get('/', (req,res) => {
  res.send(`<h1>API Running on the port ${port}</h1>`);
});

app.get('/api/users/', (req, res) => {
    //если читать из файла, тогда в <Search /> указ let data = resp.data.users;
	res.sendFile(path.resolve(__dirname, './response-users.json'));
	//если читать данные из массива, тогда let data = resp.data;
    // res.json(USERS_DATA);
});

app.post('/api/registration/', (req, res) => {
    let newUser = req.body;
    newUser.id = TEST_DATA_JSON.users.length + 1;
    TEST_DATA_JSON.users.push(newUser);
    TEST_DATA_JSON.totalUsers = TEST_DATA_JSON.users.length;
    fs.writeFileSync('./test.json', JSON.stringify(TEST_DATA_JSON, null, 2));
    res.json("SERVER.JS - USER ADD!!!");
})

let check = (loginData, users) => {
    let userObject = users.filter(user => {
        if (loginData.currentLogin === user.login) {
            if (loginData.currentPassword === user.password) {
                return true;
            }
        } else {
            return false;
        }
    })
    if (userObject.length === 1) {
        return true;
    } else {
        return false;
    }
    // надо придумать что-то, что изменится, если придет 1 элемент
    // и с помощью этого 1 элемента открыть профиль пользователя
}

app.post('/api/login/', (req, res) => {
    const loginData = req.body;
    let users = TEST_DATA_JSON.users; //все пользователи
    let otvet = check(loginData, users); //проверяю есть ли 1 пользователь
    if (otvet) {
        res.json("SERVER.JS - LOGIN/PASSWORD EXIST");
    } else {
        res.json("ERROR IN LOGIN");
    }

})

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});
