const array = require("../../src/List.js");

test("array every: check if all numbers are greater than 5", () => {
  const input = [10, 20, 30, 40, 50];
  const expected = true;

  const callback = (item) => item > 5;

  const got = array.every(input, callback);
  expect(got).toBe(expected);
});

test("array every: check if all numbers are greater than 10", () => {
  const input = [10, 20, 30, 40, 50];
  const expected = false;

  const callback = (item) => item > 10;

  const got = array.every(input, callback);
  expect(got).toBe(expected);
});

test("array every: exception on invalid array argument", () => {
  const input = { a: 1, b: 2, c: 3 };
  const callback = (item) => item > 10;

  expect(() => {
    array.every(input, callback);
  }).toThrow();
});

test("array every: exception on invalid callback argument", () => {
  const input = [10, 20, 30, 40, 50];
  const callback = 40;

  expect(() => {
    array.every(input, callback);
  }).toThrow();
});
