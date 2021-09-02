import Hash from "../../src/Hash.mjs";

test("object isObject: check if argument is object", () => {
  const input = {};
  const expected = true;

  const got = Hash.isObject(input);
  expect(got).toBe(expected);
});

test("object isObject: check if argument is not object", () => {
  const input = [1, 2, 3, 4];
  const expected = false;

  const got = Hash.isObject(input);
  expect(got).toBe(expected);
});
