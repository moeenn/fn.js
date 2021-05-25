const array = require("../src/array.js");

test("array filter: remove odd numbers from array", () => {
  const input = [5, 6, 7, 8, 9];
  const expected = [6, 8];

  const got = array.filter(input, (n) => n % 2 === 0);
  expect(got).toEqual(expected);
});

test("array filter: remove words longer than 3 characters", () => {
  const input = ["cat", "city", "dog", "alpine", "parrot", "lan"];
  const expected = ["cat", "dog", "lan"];

  const got = array.filter(input, (word) => word.length <= 3);
  expect(got).toEqual(expected);
});

test("array filter: exception on invalid array", () => {
  const input = { a: 1, b: 2, c: 3 };
  const callback = (n) => n > 2;

  expect(() => {
    array.filter(input, callback);
  }).toThrow();
});

test("array filter: exception on invalid callback type", () => {
  const input = [1, 2, 3, 4, 5];
  const callback = "something";

  expect(() => {
    array.filter(input, callback);
  }).toThrow();
});

test("array filter: exception on all invalid arguments", () => {
  const input = { a: 1, b: 2, c: 3 };
  const callback = "something";

  expect(() => {
    array.filter(input, callback);
  }).toThrow();
});