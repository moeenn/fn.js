const Hash = require("../../src/Hash.js");

test("object set: set property of an object (first level)", () => {
  const input = { a: 1, b: 2, c: 3 };
  const expected = { a: 1, b: 2, c: 300 };

  const got = Hash.set(input, "c", 300);
  expect(got).toEqual(expected);
});

test("object set: set property of an object (nested level)", () => {
  const input = {
    id: 1,
    name: "Some name",
    hobbies: ["Games", "Sports", "Study"],
    location: {
      lng: 3000,
      lat: 4000,
      area: {
        country: {
          city: "Sample",
        },
      },
    },
  };

  const expected = {
    id: 1,
    name: "Some name",
    hobbies: ["Games", "Sports", "Study"],
    location: {
      lng: 3000,
      lat: 4000,
      area: {
        country: {
          city: "Example",
        },
      },
    },
  };

  const got = Hash.set(input, "location.area.country.city", "Example");
  expect(got).toEqual(expected);
});

test("object set: exception on invalid object argument", () => {
  const input = 400;

  expect(() => {
    Hash.set(input, "a", 4);
  }).toThrow();
});

test("object set: exception on invalid object argument", () => {
  const input = { a: 1, b: 2, c: 3 };

  expect(() => {
    Hash.set(input, 5, "something");
  }).toThrow();
});
