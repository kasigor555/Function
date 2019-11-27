'use strict';
/**
 * Создайте строку из случайных символов ("генаратор паролей")
 * Используйте Math.random() и Math.floor()
 * @param {number} length - длина генерируемой строки
 * @param {string} possible - символы, учавствующие в переборе
 * @return {string} key - строка символов сгенерированная случайным образом
 */

const generateKey = (length, possible) => {
  const base = possible.length; // длинна строки с набором символов
  let key = ''; // итоговая строка
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * base); // генерация индекса выбираемого символа (от 0 до base)
    key += possible[index]; // сборка итоговой строки
  }
  return key;
};

const characters = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpRrSsTtUuVvWwXxYyZz0123456789*/-+=(){}[]<>\|?:;&%$#@!~';

console.log(generateKey(15, characters));

module.exports = { generateKey };
