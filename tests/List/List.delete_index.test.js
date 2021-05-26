const array = require("../../src/List.js");

test("array delete_index: check if element is deleted from array", () => {
  const input = [1, 2, 3, 4, 5];
  const expected = [1, 2, 4, 5];

  const got = array.delete_index(input, 2);
  expect(got).toEqual(expected);
});

test("array delete_index: exception on invalid array argument", () => {
  const input = 300;
  expect(() => array.delete_index(input, 4)).toThrow();
});

test("array delete_index: exception on invalid index", () => {
  const input = [1, 2, 3, 4, 5];
  expect(() => array.delete_index(input, 10)).toThrow();
});
