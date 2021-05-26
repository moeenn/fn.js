const array = require("../../src/List.js");

test("array is_uniform: check if an array contains only numbers", () => {
  const input = [1, 2, 2, 3, 4];
  const expected = true;

  const got = array.is_uniform(input);
  expect(got).toBe(expected);
});

test("array is_uniform: check if an array contains only strings", () => {
  const input = ["some", "games", "are", "hard", "games"];
  const expected = true;

  const got = array.is_uniform(input);
  expect(got).toBe(expected);
});

test("array is_uniform: check if an array contains mixed types", () => {
  const input = [1, true, ["a", "b"]];
  const expected = false;

  const got = array.is_uniform(input);
  expect(got).toBe(expected);
});

test("array is_uniform: exception throw on invalid array argument", () => {
  const input = 400;
  expect(() => array.is_uniform(input)).toThrow();
});
