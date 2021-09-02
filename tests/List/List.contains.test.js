import List from "../../src/List.mjs";

test("array has: check if item exists in array", () => {
  const input = [1, 2, 3, 4, 5];
  const expected = true;

  const got = List.contains(input, 4);
  expect(got).toBe(expected);
});

test("array has: check if item does not exists in array", () => {
  const input = [1, 2, 3, 4, 5];
  const expected = false;

  const got = List.contains(input, 40);
  expect(got).toBe(expected);
});

test("array has: exception on invalid argument type", () => {
  const input = { a: 30 };
  expect(() => List.contains(input, 4)).toThrow();
});

test("array has: check if objects within arrays are matched", () => {
  const input = [{first: "M.", last: "Moeen"}, {first: "M.", last: "Saad"}];
  const find = {first: "M.", last: "Moeen"};
  const expected = true;

  const got = List.contains(input, find);
  expect(got).toBe(expected);
})

test("array has: check if objects within arrays not are matched", () => {
  const input = [{first: "M.", last: "Moeen"}, {first: "M.", last: "Saad"}];
  const find = {first: "M.", last: "Moeenn"};
  const expected = false;

  const got = List.contains(input, find);
  expect(got).toBe(expected);
})