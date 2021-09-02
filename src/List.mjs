import Hash from "./Hash.mjs";
import Num from "./Num.mjs";
import Str from "./Str.mjs";


function isArray(array) {
  return array !== null && array.constructor === Array;
}

function copy(array) {
  if (!isArray(array)) {
    throw new Error("Invalid argument for array copy");
  }

  return [...array];
}

function equals(array_1, array_2) {
  if (!isArray(array_1) || !isArray(array_2)) {
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
}

function map(array, callback) {
  if (!isArray(array) || callback.constructor !== Function) {
    throw new Error("Invalid arguments for map");
  }

  return copy(array).map(callback);
}

function filter(array, callback) {
  if (!isArray(array) || callback.constructor !== Function) {
    throw new Error("Invalid arguments for filter");
  }

  return copy(array).filter(callback);
}

function reduce(array, callback, accum) {
  if (!isArray(array) || callback.constructor !== Function) {
    throw new Error("Invalid arguments for filter");
  }

  return copy(array).reduce(callback, accum);
}

function every(array, callback) {
  if (!isArray(array) || callback.constructor !== Function) {
    throw new Error("Invalid arguments for filter");
  }

  for (const [index, item] of array.entries()) {
    const result = callback(item, index);
    if (!result) return false;
  }

  return true;
}

function push(array, item) {
  if (!isArray(array)) {
    throw new Error("Invalid argument for array push");
  }

  return [...array, item];
}

function removeIndex(array, index) {
  if (!isArray(array)) {
    throw new Error("Invalid argument for array removeIndex");
  }

  if (index >= array.length || index < 0) {
    throw new Error(
      `Invalid index for array delete. Array size is ${array.length}`
    );
  }

  const clone = copy(array);
  clone.splice(index, 1);

  return clone;
}

function remove(array, value) {
  if (!isArray(array)) {
    throw new Error("Invalid argument for array remove");
  }

  const result = copy(array).filter((v) => {
    if (Hash.isObject(value)) {
      return !Hash.equals(v, value);
    }

    return v !== value;
  });

  return result;
}

function contains(array, item) {
  if (!isArray(array)) {
    throw new Error("Invalid argument for array has");
  }

  if (Hash.isObject(item)) {
    for (const [index, value] of array.entries()) {
      if (Hash.equals(value, item)) {
        return true;
      }
    }

    return false;
  }

  return array.includes(item);
}

function sort(array, ascending = true) {
  if (!isArray(array)) {
    throw new Error("Invalid argument for array sort");
  }

  if (!isUniform(array)) {
    throw new Error("Invalid array: Argument must be a uniform array");
  }

  // if first element is object then all elements
  // are objects
  if (Hash.isObject(array[0])) {
    throw new Error("Cannot sort array containing objects");
  }

  if (!contains([Number, String], array[0].constructor)) {
    throw new Error("Can only sort Numbers and Strings");
  }

  const clone = copy(array);

  if (ascending) {
    if (Num.isNumber(clone[0])) return clone.sort((a, b) => a - b);

    if (Str.isString(clone[0])) {
      return clone.sort((a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;

        return 0;
      });
    }
  }

  // sort descending
  if (Num.isNumber(clone[0])) return clone.sort((a, b) => b - a);

  // sort strings descending
  return clone.sort((a, b) => {
    if (a < b) return 1;
    if (a > b) return -1;

    return 0;
  });
}

function isUniform(array) {
  if (!isArray(array)) {
    throw new Error("Invalid argument for array isUniform");
  }

  return every(array, (item) => {
    const type = array[0].constructor;
    return item.constructor === type;
  });
}

export default {
  isArray,
  copy,
  equals,
  map,
  reduce,
  filter,
  reduce,
  every,
  push,
  removeIndex,
  remove,
  contains,
  sort,
  isUniform,
};