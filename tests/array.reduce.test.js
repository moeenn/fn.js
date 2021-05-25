const array = require("../src/array.js");

test("array reduce: combine words into slug", () => {
  const input = ["sample", "article", "name", "random"];
  const expected = "sample-article-name-random";

  const reducer = (accum, current) => {
    if (accum === "") return current;
    return `${accum}-${current}`;
  };

  const got = array.reduce(input, reducer, "");
  expect(got).toBe(expected);
});

test("array reduce: sum all numbers", () => {
  const input = [1, 2, 3, 4, 5];
  const expected = 15;

  const reducer = (accum, current) => {
    return accum + current;
  };

  const got = array.reduce(input, reducer, 0);
  expect(got).toBe(expected);
});

test("array reduce: exception on invalid array argument", () => {
  const input = { a: 1, b: 2, c: 3 };
  const reducer = (accum, current) => accum + current;
  const init = 0;

  expect(() => {
    array.reduce(input, reducer, init);
  }).toThrow();
});

test("array reduce: exception on invalid reducer function", () => {
  const input = [1, 2, 3, 4, 5];
  const reducer = "something";
  const init = 0;

  expect(() => {
    array.reduce(input, reducer, init);
  }).toThrow();
});

test("array reduce: exception on all invalid arguments", () => {
  const input = { a: 1, b: 2, c: 3 };
  const reducer = "something";
  const init = "a";

  expect(() => {
    array.reduce(input, reducer, init);
  }).toThrow();
});

