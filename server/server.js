const express = require('express');
const path = require('path'),
    bodyParser = require('body-parser');
const port = 3001;
const app = express();

//хранилище данных для всех пользователей
// пока до конца я еще не знаю что именно мы будем использовать
//на выбор в get запросе исп либо USERS_DATA, либо response-users.json
const USERS_DATA = [
    {
        "id": 1,
        "firstName": "Nastya",
        "lastName": "Zamashnyuk",
        "location": {
            "country": "Russia",
            "city": "Moscow"
        },
        "pets": {
            "type": "dog",
            "name": "Lucky",
            "age": 1,
            "gender": "female"
        }
    },
    {
        "id": 2,
        "firstName": "Stanislav",
        "lastName": "Tushnikov",
        "location": {
            "country": "Russia",
            "city": "Moscow"
        },
        "pets": {
            "type": "dog",
            "name": "Julya",
            "age": 10,
            "gender": "female"
        }
    }
];

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
    //надо понять каким образом записывать данные в файл.json
    const user = req.body;
    USERS_DATA.push(user);
    res.json("SERVER.JS - USER ADD!!!");
})

app.post('/api/login/', (req, res) => {
    console.log('post /api/login/', req.body);

    // checkLogin()

})

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});
