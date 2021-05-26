const Hash = require("./Hash.js");
const Num = require("./Num.js");
const Str = require("./Str.js");

const List = {
  is_array: function (ar) {
    return ar !== null && ar.constructor === Array;
  },

  copy: function (array) {
    if (!this.is_array(array)) {
      throw new Error("Invalid argument for array copy");
    }

    return [...array];
  },

  equals: function (array_1, array_2) {
    if (!this.is_array(array_1) || !this.is_array(array_2)) {
      throw new Error("Invalid arguments for array equals");
    }

    if (array_1.length !== array_2.length) return false;
    for (let i = 0; i < array_1.length; i++) {
      if (
        array_1[i].constructor !== array_2[i].constructor ||
        array_1[i] !== array_2[i]
      )
        return false;
    }

    return true;
  },

  map: function (array, callback) {
    if (!this.is_array(array) || callback.constructor !== Function) {
      throw new Error("Invalid arguments for map");
    }

    return this.copy(array).map(callback);
  },

  filter: function (array, callback) {
    if (!this.is_array(array) || callback.constructor !== Function) {
      throw new Error("Invalid arguments for filter");
    }

    return this.copy(array).filter(callback);
  },

  reduce: function (array, callback, accum) {
    if (!this.is_array(array) || callback.constructor !== Function) {
      throw new Error("Invalid arguments for filter");
    }

    return this.copy(array).reduce(callback, accum);
  },

  every: function (array, callback) {
    if (!this.is_array(array) || callback.constructor !== Function) {
      throw new Error("Invalid arguments for filter");
    }

    for (const [index, item] of array.entries()) {
      const result = callback(item, index);
      if (!result) return false;
    }

    return true;
  },

  push: function (array, item) {
    if (!this.is_array(array)) {
      throw new Error("Invalid argument for array push");
    }

    return [...array, item];
  },

  delete_index: function (array, index) {
    if (!this.is_array(array)) {
      throw new Error("Invalid argument for array delete");
    }

    if (index >= array.length || index < 0) {
      throw new Error(
        `Invalid index for array delete. Array size is ${array.length}`
      );
    }

    const clone = this.copy(array);
    clone.splice(index, 1);

    return clone;
  },

  delete: function (array, value) {
    if (!this.is_array(array)) {
      throw new Error("Invalid argument for array delete");
    }

    const result = this.copy(array).filter((v) => {
      if (Hash.is_object(value)) {
        return !Hash.equals(v, value);
      }

      return v !== value;
    });

    return result;
  },

  contains: function (array, item) {
    if (!this.is_array(array)) {
      throw new Error("Invalid argument for array has");
    }

    if (Hash.is_object(item)) {
      for (const [index, value] of array.entries()) {
        if (Hash.equals(value, item)) {
          return true;
        }
      }

      return false;
    }

    return array.includes(item);
  },

  sort: function (array, ascending = true) {
    if (!this.is_array(array)) {
      throw new Error("Invalid argument for array sort");
    }

    if (!this.is_uniform(array)) {
      throw new Error("Invalid array: Argument must be a uniform array");
    }

    // if first element is object then all elements
    // are objects
    if (Hash.is_object(array[0])) {
      throw new Error("Cannot sort array containing objects");
    }

    if (!this.contains([Number, String], array[0].constructor)) {
      throw new Error("Can only sort Numbers and Strings");
    }

    const clone = this.copy(array);

    if (ascending) {
      if (Num.is_number(clone[0])) return clone.sort((a, b) => a - b);

      if (Str.is_string(clone[0])) {
        return clone.sort((a, b) => {
          if (a < b) return -1;
          if (a > b) return 1;

          return 0;
        });
      }
    }

    // sort descending
    if (Num.is_number(clone[0])) return clone.sort((a, b) => b - a);

    // sort strings descending
    return clone.sort((a, b) => {
      if (a < b) return 1;
      if (a > b) return -1;

      return 0;
    });
  },

  is_uniform: function (array) {
    if (!this.is_array(array)) {
      throw new Error("Invalid argument for array is_uniform");
    }

    return this.every(array, (item) => {
      const type = array[0].constructor;
      return item.constructor === type;
    });
  },
};

module.exports = List