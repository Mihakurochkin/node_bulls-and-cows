'use strict';

const { checkIsValidUserInput } = require('./checkIsValidUserInput');

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  let number = Math.floor(Math.random() * 9000) + 1000;

  while (checkIsValidUserInput(String(number)) === false) {
    number = Math.floor(Math.random() * 9000) + 1000;
  }

  return number;
}

module.exports = {
  generateRandomNumber,
};
