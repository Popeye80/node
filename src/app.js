// const Joi = require('joi');
// const shortid = require('shortid');


// const passwordSchema = Joi.string().min(3).max(10).alphanum();
// console.log(passwordSchema.validate('qfgfh'));

// console.log(shortid.generate());

// Запуск сервера
// const express = require('express');

// const app = express();
// app.use('*', (req, res) => {
//     console.log('Был запрос от браузера');
//     res.send('<h1>Ну,это тебе в ответ!</h1>');
// })

// const listener = app.listen(4444, () => {
//  console.log(`Вэб сервер запущен на порте ${listener.address().port}`);
// })

// Транспиляция
const sum = (a, b) => a + b;
sum(2, 3);
class Hero {
    constructor(name) { 
        this._name = name;
    }

    get name() { 
        return this._name;
    }
    set name(newName) { 
        this._name = newName;
    }
}
const h = new Hero('mango');