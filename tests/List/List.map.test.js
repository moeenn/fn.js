import List from "../../src/List.mjs";

test("array map: check output length", () => {
  const input = [1, 2, 3, 4, 5];
  const expected = [2, 4, 6, 8, 10];

  const got = List.map(input, (n) => n * 2);
  expect(got.length).toBe(expected.length);
});

test("array map: double all numbers", () => {
  const input = [1, 2, 3, 4, 5];
  const expected = [2, 4, 6, 8, 10];

  const got = List.map(input, (n) => n * 2);
  expect(got).toEqual(expected);
});

test("array map: concatenate all strings", () => {
  const input = ["a", "b", "c", "d"];
  const expected = ["fa", "fb", "fc", "fd"];

  const got = List.map(input, (a) => "f" + a);
  expect(got).toEqual(expected);
});

test("array map: exception on invalid callback", () => {
  const input = [1, 2, 3, 4, 5];
  const callback = 20;

  expect(() => {
    List.map(input, callback);
  }).toThrow();
});

test("array map: exception on argument array", () => {
  const input = { a: 1, b: 2, c: 3 };
  const callback = (n) => n * 2;

  expect(() => {
    List.map(input, callback);
  }).toThrow();
});

test("array map: exception on all invalid properties", () => {
  const input = { a: 1, b: 2, c: 3 };
  const callback = "something";

  expect(() => {
    List.map(input, callback);
  }).toThrow();
});