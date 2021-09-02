
function isNumber(number) {
  return number.constructor === Number && !isNaN(number);
}

function isInt(number) {
  return Number.isInteger(number);
}

function isUint(number) {
  return Number.isInteger(number) && number >= 0;
}

function isFloat(number) {
  return number % 1 !== 0;
}

function toString(number) {
  return `${number}`;
}

export default {
  isNumber,
  isInt,
  isUint,
  isFloat,
  toString,
}