const fs = require('fs');
const beautify = require("json-beautify");
//можно использовать при записи пользователя в файл

let obj = { firstName: "nanan", lastName: "111bftydftan", num: 42, firstdfgName: "11111", lastfName: "111bftydftydftyan", firstytName: "nftydftydfn", lastqweName: "banan"};
let obj2 = { firstName: "222nanan", laaaastName: "22bftydftan", num: 42, firstderwfgName: "222nanan", lastfName: "222b2ftydft232323ydftyan", firstyt111Name: "nftydftydfn", lastqweName: "banan"};


fs.appendFile("test2.json", beautify(obj2, null, 2, 100), function(error){
    if(error) throw error; // если возникла ошибка

    fs.appendFile("test2.json", ',', (error) => {
        if(error) throw error;
    })
    console.log("Запись файла завершена. Содержимое файла:");
    let data = fs.readFileSync("test2.json", "utf8");
    console.log(data);  // выводим считанные данные
});

//beautify('{"key": "tyt"}', null, 2, 100)
// fs.writeFileSync('test.json', JSON.stringify('{"key": "tyt"}', null, '\t'))
// fs.writeFileSync('test.json',beautify(obj, null, 2, 100))
// fs.writeFileSync('test.json',beautify(obj2, null, 2, 100))
// beautify()

// let obj = { str: "Hello World", num: 42, smallarray: [ 1, 2, 3, "foo", {} ], smallobject: { foo: "bar", bar: 42 }};
// console.log(beautify(obj, null, 2, 100));
