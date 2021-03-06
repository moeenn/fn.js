import List from "../../src/List.mjs";

test("array copy: changes to copy dont change the original array", () => {
  const input = [1, 2, 3, 4, 5];
  const expected = [1, 2, 3, 4, 5];

  const got = List.copy(input);
  input[2] = 300;

  expect(got).toEqual(expected);
});

test("array copy: check thrown exception", () => {
  const input = { a: 1, b: 2, c: 3 };
  expect(() => {
    List.copy(input);
  }).toThrow();
});

test("array copy: check original array not mutated", () => {
  const input = [1, 2, 3, 4, 5];
  const expected = [1, 2, 3, 4, 5];

  const got = List.copy(input);
  got[0] = 500;

  expect(input).toEqual(expected);
});