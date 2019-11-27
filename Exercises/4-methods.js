'use strict';

// Изучить все свойства объекта iface и
// извлечь имена функций и кол-во аргументов
// For example: {
//   m1: x => [x],
//   m2: function (x, y) {
//     return [x, y];
//   },
//   m3(x, y, z) {
//     return [x, y, z];
//   }
// will return: [
//   ['m1', 1],
//   ['m2', 2],
//   ['m3', 3]
// ]
const methods = iface => {
  const res = [];
  for (const prop in iface) {
    const fn = iface[prop];
    if (typeof fn === 'function') {
      res.push([prop, fn.length]);
    }
  }
  return res;
};

// Как работает функция...
// Создаём пустой массик res
// Перебираем объект и имя (ключ) элемента в prop
// На каждой итерации помещаем в fn содержимое объекта,
// по ключу iface[prop]
// Проверяем, является ли это содержимое функцией
// Если да, то пушим (push) в массив res массив с именем и длинной

module.exports = { methods };
