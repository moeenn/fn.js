const array = {
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

    for (const item of array) {
      const result = callback(item);
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

  // delete instances by value
  // delete: function (array, item) {
  //   if (!this.is_array(array)) {
  //     throw new Error("Invalid argument for array delete")
  //   }
  // },

  has: function (array, item) {
    if (!this.is_array(array)) {
      throw new Error("Invalid argument for array has")
    }

    return array.includes(item)
  }
};

module.exports = array;
