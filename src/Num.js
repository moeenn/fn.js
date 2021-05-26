const Num = {
  is_number: function (number) {
    return number.constructor === Number && !isNaN(number);
  },

  is_int: function (number) {
    return Number.isInteger(number);
  },

  is_uint: function (number) {
    return Number.isInteger(number) && number >= 0;
  },

  is_float: function (number) {
    return number % 1 !== 0;
  }
}

module.exports = Num;