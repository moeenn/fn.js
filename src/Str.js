const Str = {
  is_string: function (string) {
    return string.constructor === String;
  },
}

module.exports = Str;