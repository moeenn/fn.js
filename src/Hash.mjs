function isObject(object) {
  return (
    object !== null &&
    typeof object === "object" &&
    object.constructor !== Array
  );
}

function copy(object) {
  if (!isObject(object)) {
    throw new Error("Invalid argument for object copy");
  }

  return JSON.parse(JSON.stringify(object));
}

function equals(object_1, object_2) {
  if (!isObject(object_1) || !isObject(object_2)) {
    throw new Error("Invalid argument for object equals");
  }

  const compare = (a, b) => {
    if (a === b) return true;

    if (
      typeof a != "object" ||
      typeof b != "object" ||
      a == null ||
      b == null
    )
      return false;

    let keysA = Object.keys(a),
      keysB = Object.keys(b);

    if (keysA.length != keysB.length) return false;

    for (let key of keysA) {
      if (!keysB.includes(key)) return false;

      if (typeof a[key] === "function" || typeof b[key] === "function") {
        if (a[key].toString() != b[key].toString()) return false;
      } else {
        if (!compare(a[key], b[key])) return false;
      }
    }

    return true;
  };

  return compare(object_1, object_2);
}

function freeze(object) {
  if (!isObject(object)) {
    throw new Error("Invalid argument for object freeze");
  }

  const deepFreeze = (o) => {
    Object.freeze(o);

    Object.getOwnPropertyNames(o).forEach(function (prop) {
      if (
        o[prop] !== null &&
        (typeof o[prop] === "object" || typeof o[prop] === "function") &&
        !Object.isFrozen(o[prop])
      ) {
        deepFreeze(o[prop]);
      }
    });

    return o;
  };

  return deepFreeze(copy(object));
}

function get(object, property) {
  if (!isObject(object) || property.constructor !== String) {
    throw new Error("Invalid arguments for object get");
  }

  const prop_array = property.split(".");
  let result = object[prop_array[0]];

  for (let i = 1; i < prop_array.length; i++) {
    result = result[prop_array[i]];
  }

  if (!result) {
    throw new Error(`Failed to get property: object.${property}`);
  }

  return result;
}

function mutate(object, mutator) {
  if (
    !isObject(object) ||
    mutator.constructor !== Function
  ) {
    throw new Error("Invalid arguments for Hash.mutate");
  }

  const clone = copy(object);
  return mutator(clone);
}

export default {
  isObject,
  copy,
  equals,
  freeze,
  get,
  mutate,
};