const express = require('express');
const path = require('path'),
    bodyParser = require('body-parser');
const port = 3001;
const fs = require('fs')
const app = express();

// let DATA_JSON = JSON.parse(fs.readFileSync('./response-users.json', 'utf8'))
let TEST_DATA_JSON = JSON.parse(fs.readFileSync('./test.json', 'utf8'))


app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, '../my-app/build')));

app.get('/', (req,res) => {
  res.send(`<h1>API Running on the port ${port}</h1>`);
});

app.get('/api/users/', (req, res) => {
	res.sendFile(path.resolve(__dirname, './response-users.json'));
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

app.post('/api/login/', (req, res) => {
    const loginData = req.body;
    console.log('loginData', loginData);
    let users = TEST_DATA_JSON.users; //все пользователи
    // let users = DATA_JSON.users; //все пользователи
    let user = checkLoginData(loginData, users);
    // console.log('user after check', user);
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
