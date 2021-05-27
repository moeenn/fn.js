const Hash = {
  is_object: function (object) {
    return (
      object !== null &&
      typeof object === "object" &&
      object.constructor !== Array
    );
  },

  copy: function (object) {
    if (!this.is_object(object)) {
      throw new Error("Invalid argument for object copy");
    }

    return JSON.parse(JSON.stringify(object));
  },

  equals: function (object_1, object_2) {
    if (!this.is_object(object_1) || !this.is_object(object_2)) {
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
  },

  freeze: function (object) {
    if (!this.is_object(object)) {
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

    return deepFreeze(this.copy(object));
  },

  get: function (object, property) {
    if (!this.is_object(object) || property.constructor !== String) {
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
  },

  set: function (object, property, value) {
    if (
      !this.is_object(object) ||
      property.constructor !== String ||
      value === null ||
      value === undefined
    ) {
      throw new Error("Invalid arguments for object get");
    }

    const clone = this.copy(object);

    const access_string = `clone.${property}`;
    const result = eval(access_string);
    if (!result) {
      throw new Error(`Failed to find property object.${property}`);
    }

    const command =
      value.constructor == String
        ? `${access_string} = '${value}'`
        : `${access_string} = ${value}`;

    eval(command);

    return clone;
  },
};

module.exports = Hash;
