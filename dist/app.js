"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

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
var sum = function sum(a, b) {
  return a + b;
};

sum(2, 3);

var Hero = /*#__PURE__*/function () {
  function Hero(name) {
    _classCallCheck(this, Hero);

    this._name = name;
  }

  _createClass(Hero, [{
    key: "name",
    get: function get() {
      return this._name;
    },
    set: function set(newName) {
      this._name = newName;
    }
  }]);

  return Hero;
}();

var h = new Hero('mango');