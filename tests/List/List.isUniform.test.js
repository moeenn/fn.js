import List from "../../src/List.mjs";

test("array is_uniform: check if an array contains only numbers", () => {
  const input = [1, 2, 2, 3, 4];
  const expected = true;

  const got = List.isUniform(input);
  expect(got).toBe(expected);
});

test("array is_uniform: check if an array contains only strings", () => {
  const input = ["some", "games", "are", "hard", "games"];
  const expected = true;

  const got = List.isUniform(input);
  expect(got).toBe(expected);
});

test("array is_uniform: check if an array contains mixed types", () => {
  const input = [1, true, ["a", "b"]];
  const expected = false;

  const got = List.isUniform(input);
  expect(got).toBe(expected);
});

test("array is_uniform: exception throw on invalid array argument", () => {
  const input = 400;
  expect(() => List.isUniform(input)).toThrow();
});
