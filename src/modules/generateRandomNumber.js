'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const digits = Array.from({ length: 10 }, (_, i) => i);

  for (let i = digits.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [digits[i], digits[j]] = [digits[j], digits[i]];
  }

  const number =
    digits[0] === 0
      ? digits[1].toString() +
        digits[0].toString() +
        digits.slice(2, 4).join('')
      : digits.slice(0, 4).join('');

  return +number;
}

module.exports = {
  generateRandomNumber,
};
