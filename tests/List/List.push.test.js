import List from "../../src/List.mjs";

test("array push: check if items are pushed", () => {
  const input = [1, 2, 3, 4];
  const expected = [1, 2, 3, 4, 5];
  const got = List.push(input, 5);

  expect(got.length).toBe(expected.length);
  expect(got).toEqual(expected);
});

test("array push: check original array is unchanged", () => {
  const input = [1, 2, 3, 4];
  const expected = [1, 2, 3, 4];

  List.push(input, 5);

  expect(input).toEqual(expected);
});
