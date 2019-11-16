'use strict';

// Generate random Number between from min to max
// Use Math.random() and Math.floor()
// See documentation at MDN
// Конструкция (max - min + 1) + min) создаёт смещение
// +1 нужно, чтобы в диапазон было включено число max
const random = (min, max) => {
  if (max === undefined) {
    max = min;
    min = 0;
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
};

module.exports = { random };
