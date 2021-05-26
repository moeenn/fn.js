const Hash = require("../../src/Hash.js");

test("object is_object: check if argument is object", () => {
  const input = {};
  const expected = true;

  const got = Hash.is_object(input);
  expect(got).toBe(expected);
});

test("object is_object: check if argument is not object", () => {
  const input = [1, 2, 3, 4];
  const expected = false;

  const got = Hash.is_object(input);
  expect(got).toBe(expected);
});
