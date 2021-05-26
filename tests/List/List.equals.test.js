const array = require("../../src/List.js");

test("array equals: check if two array are same", () => {
  const input_1 = [1, 2, 3, 4, 5];
  const input_2 = [1, 2, 3, 4, 5];
  const expected = true;

  const got = array.equals(input_1, input_2);
  expect(got).toBe(expected);
});

test("array equals: exception on invalid arguments", () => {
  const input_1 = { a: 1, b: 2, c: 3 };
  const input_2 = { d: 4, e: 5, f: 6 };

  expect(() => {
    array.equals(input_1, input_2);
  }).toThrow();
});
