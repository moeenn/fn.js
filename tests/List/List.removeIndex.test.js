import List from "../../src/List.mjs";

test("array delete_index: check if element is deleted from array", () => {
  const input = [1, 2, 3, 4, 5];
  const expected = [1, 2, 4, 5];

  const got = List.removeIndex(input, 2);
  expect(got).toEqual(expected);
});

test("array delete_index: exception on invalid array argument", () => {
  const input = 300;
  expect(() => List.removeIndex(input, 4)).toThrow();
});

test("array delete_index: exception on invalid index", () => {
  const input = [1, 2, 3, 4, 5];
  expect(() => List.removeIndex(input, 10)).toThrow();
});
