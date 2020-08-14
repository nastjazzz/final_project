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

const checkLoginData = (loginData, users) => {
    let userObject = users.filter(user => {
        if (loginData.currentLogin === user.login) {
            if (loginData.currentPassword === user.password) {
                return true;
            }
        } else {
            return false;
        }
    })
    return userObject;
}

app.post('/api/login/', (req, res) => {
    const loginData = req.body;
    let users = TEST_DATA_JSON.users; //все пользователи
    let user = checkLoginData(loginData, users);
    let id = (user.length === 1 && user.map(u => u.id)); //прошедший проверку id пользователя
    console.log(user);
    console.log(id);
    id ? res.json(...user) : res.json(false);
})

app.get('/api/profile/:id', (req, res) => {
    console.log('Request URL:', req.originalUrl);
    console.log('Request ID:', req.params.id);
    const id = +req.params.id;
    const user = TEST_DATA_JSON.users.filter(u => u.id === id);
    console.log(...user);
    res.json(...user);
})

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});
