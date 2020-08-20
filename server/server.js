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

app.get('/api/login', (req, res) => {
    let requestHeaders = req.get('authorization');
    if (!requestHeaders) {
        return res.status(401).send('error');
    } else
        return res.send('success');
})

app.get('/api/profile/:id', (req, res) => {
    const id = +req.params.id;
    const user = [...DATA_JSON.users.filter(u => u.id === id)];

    user.length === 1 ? res.json(...user) : res.status(404).json({"message": "No user with this id!"})
})


app.post('/api/registration/', (req, res) => {
    // let newUser = {id: DATA_JSON.users.length + 1, ...req.body}; //данные нового пользователя + id
    // console.log('NEW_USER', newUser);
    // const userWithNewLogin = DATA_JSON.users.filter(u => u.login === newUser.login);
    // //если что-то находится после .filter, значит логин уже занят
    // if (userWithNewLogin.length === 0) {
    //     DATA_JSON.users.push(newUser);
    //     DATA_JSON.totalUsers = DATA_JSON.users.length;
    //     fs.writeFileSync('./response-users.json', JSON.stringify(DATA_JSON, null, 4));
    //     res.json({isReg: true, newUser: newUser});
    // } else {
    //     res.status(401).json({isReg: false});
    // }
})

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});
