const object = require("../src/object.js");

test("object is_object: check if argument is object", () => {
  const input = {};
  const expected = true;

  const got = object.is_object(input);
  expect(got).toBe(expected);
});

test("object is_object: check if argument is not object", () => {
  const input = [1, 2, 3, 4];
  const expected = false;

  const got = object.is_object(input);
  expect(got).toBe(expected);
});
