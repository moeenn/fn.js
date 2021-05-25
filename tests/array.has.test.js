const array = require("../src/array.js");

test("array has: check if item exists in array", () => {
  const input = [1, 2, 3, 4, 5];
  const expected = true;

  const got = array.has(input, 4);
  expect(got).toBe(expected);
});

test("array has: check if item does not exists in array", () => {
  const input = [1, 2, 3, 4, 5];
  const expected = false;

  const got = array.has(input, 40);
  expect(got).toBe(expected);
});

test("array has: exception on invalid argument type", () => {
  const input = { a: 30 };
  expect(() => array.has(input, 4)).toThrow();
});
