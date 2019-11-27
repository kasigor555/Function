'use strict';

/**
 * @param {string} ip - входящая строка
 * @return {int} сумма всех элементов ip,
 * смещённых на каждой итерации 8 бит в лево
 */

// Parse ip address as string, for example '10.0.0.1'
// to ['10', '0', '0', '1'] to [10, 0, 0, 1]
// and convert to Number value 167772161 with sitwise shift
// (10 << 8 << 8 << 8) + (0 << 8 << 8) + (0 << 8) + 1 === 128
// Use Array.prototype.reduce of for loop


const ipToInt = (ip = '127.0.0.1') => {
  const ipArr = ip.split('.').map(parseFloat);
  return ipArr.reduce((acc, item) => (acc << 8) + item, 0);
};

module.exports = { ipToInt };

// Решение учителы:
// const ipToInt = (ip = '127.0.0.1') => {
//   const fn = (res, item) => (res << 8) + parseInt(item);
//   return ip.split('.').reduce(fn, 0);
// };
