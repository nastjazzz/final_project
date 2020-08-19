const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');
const checkLoginData = require('./helpers');

const port = 3001;
const app = express();

let DATA_JSON = JSON.parse(fs.readFileSync('./response-users.json', 'utf8'));


app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, '../build')));

app.get('/', (req, res) => {
  res.send(`<h1>API Running on the port ${port}</h1>`);
});

app.get('/api/users/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './response-users.json'));
});

// var username = 'Test';
// var password = '123';
// var auth = 'Basic ' + new Buffer(username + ':' + password).toString('base64');
//
// var header = {'Host': 'www.example.com', 'Authorization': auth};
// var request = client.request('GET', '/', header);


app.post('/api/registration/', (req, res) => {
    let newUser = {id: DATA_JSON.users.length + 1, ...req.body}; //данные нового пользователя + id
    console.log('NEW_USER', newUser);
    const userWithNewLogin = DATA_JSON.users.filter(u => u.login === newUser.login);
    //если что-то находится после .filter, значит логин уже занят
    if (userWithNewLogin.length === 0) {
        DATA_JSON.users.push(newUser);
        DATA_JSON.totalUsers = DATA_JSON.users.length;
        fs.writeFileSync('./response-users.json', JSON.stringify(DATA_JSON, null, 4));
        res.json({isReg: true, newUser: newUser});
    } else {
        res.status(401).json({isReg: false});
    }
})

app.post('/api/login/', (req, res) => {
    const data = req.body;
    const headers = req.get('Authorization');
    console.log('data', data);
    console.log('header', headers);
    // const loginData = req.body;
    // const user = checkLoginData(loginData, DATA_JSON.users);
    // //подумать
    // let id = (user.length === 1 && user.map(u => u.id)); //прошедший проверку id пользователя
    // id ? res.json(...user) : res.json(false);
})

app.get('/api/profile/:id', (req, res) => {
    console.log('Request URL:', req.originalUrl);
    console.log('Request ID:', req.params.id);
    const id = +req.params.id;
    const user = [...DATA_JSON.users.filter(u => u.id === id)];

    user.length === 1 ? res.json(...user) : res.status(404).json({"message": "No user with this id!"})
})



app.get('url', function(req, res, next){

    // Проверяю есть ли заголовок
    let auth = req.get("authorization");
    console.log('"Authorization" header',auth)

    // On the first request, the "Authorization" header won't exist, so we'll set a Response
    // header that prompts the browser to ask for a username and password.
    if (!auth) {
        // res.set("WWW-Authenticate", "Basic realm=\"Authorization Required\"");
        res.set("WWW-Authenticate", "Basic realm=\"Authorization Required\"");
        // If the user cancels the dialog, or enters the password wrong too many times,
        // show the Access Restricted error message.
        return res.status(401).send("Authorization Required");
    } else {
        // If the user enters a username and password, the browser re-requests the route
        // and includes a Base64 string of those credentials.
        let credentials = new Buffer(auth.split(" ").pop(), "base64").toString("ascii").split(":");
        // console.log(key);
        if (credentials[0] === "login" && credentials[1] === "password") {
            // The username and password are correct, so the user is authorized.
            return res.send("Access Granted!");
        } else {
            // The user typed in the username or password wrong.
            return res.status(401).send("Access Denied (incorrect credentials)");
        }
    }

});


app.get('/api/auth/login', (req, res) => {
    const authLogin = 'login';
    const authPass = 'password';

    let requestHeaders = req.get('authorization');
    console.log(requestHeaders);
    //если нет заголовка, то ...?
    //почему это плохо
    if (!requestHeaders) {
        res.status(401).send('Нет заголовка / НЕТ ДОСТУПА');
    } else {
        let authKey = requestHeaders;
    }
})

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});
