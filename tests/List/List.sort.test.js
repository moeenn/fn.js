import List from "../../src/List.mjs";

test("array sort: sort numbers in ascending order", () => {
  const input = [1, 5, 3, 7, 9, 10, 5, 60];
  const expected = [1, 3, 5, 5, 7, 9, 10, 60];

  const got = List.sort(input);
  expect(got).toEqual(expected);
});

test("array sort: sort numbers in descending order", () => {
  const input = [1, 5, 3, 7, 9, 10, 5, 60];
  const expected = [60, 10, 9, 7, 5, 5, 3, 1];

  const got = List.sort(input, false);
  expect(got).toEqual(expected);
});

test("array sort: sort characters in ascending order", () => {
  const input = ['c', 'e', 'a', 'f', 'd'];
  const expected = ['a', 'c', 'd', 'e', 'f']

  const got = List.sort(input);
  expect(got).toEqual(expected);
})

test("array sort: sort characters in descending order", () => {
  const input = ['c', 'e', 'a', 'f', 'd'];
  const expected = ['f', 'e', 'd', 'c', 'a']

  const got = List.sort(input, false);
  expect(got).toEqual(expected);
})

test("array sort: exception on non uniform array", () => {
  const input = [1, true, "a", [4,5]];
  expect(() => List.sort(input)).toThrow();
})

test("array sort: exception on array on bools", () => {
  const input = [true, false, false, true];
  expect(() => List.sort(input)).toThrow();
})

test("array sort: exception on array on objects", () => {
  const input = [{a: 1}, {a: 2}, {a: 3}];
  expect(() => List.sort(input)).toThrow();
})