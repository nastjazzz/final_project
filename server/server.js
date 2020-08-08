const express = require('express');
const path = require('path'),
    bodyParser = require('body-parser');
const port = 3001;
const fs = require('fs')
const app = express();


// import {users} from './users-post.js'
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
    //пр регистрации надо указывать больше данных (те не только имя/фамилия и email)
    console.log('REQUEST', req.body);
    const user = req.body;
    const DATA_JSON = JSON.parse(fs.readFileSync('./test.json', 'utf8'))
    console.log(DATA_JSON.users)
    DATA_JSON.users.push(user);
    DATA_JSON.totalUsers = DATA_JSON.users.length;
    // DATA_JSON.users = user;
    // console.log(...DATA_JSON.users, user);
    // DATA_JSON.users = {[...DATA_JSON.users, user]};
    // console.log(DATA_JSON.users);

    fs.writeFileSync('./test.json', JSON.stringify(DATA_JSON, null, 2));

    //надо понять каким образом записывать данные в файл.json
    // USERS_DATA.push(user);
    // console.log('USERS_DATA',USERS_DATA)
    res.json("SERVER.JS - USER ADD!!!");
})

app.post('/api/login/', (req, res) => {
    console.log('post /api/login/', req.body);

    // checkLogin()

})

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});
