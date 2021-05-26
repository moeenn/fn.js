const array = require("../../src/List.js");

test("array delete: check all items are removed from array (simple)", () => {
  const input = ["some", "games", "are", "hard", "games"];
  const expected = ["some", "are", "hard"];

  const got = array.delete(input, "games");
  expect(got).toEqual(expected);
});

test("array delete: check all items are removed from array (simple 2)", () => {
  const input = [1, 2, 3, 4, 5, 6, 7];
  const expected = [2, 3, 4, 5, 6, 7];

  const got = array.delete(input, 1);
  expect(got).toEqual(expected);
});

test("array delete: check all items are deleted (objects)", () => {
  const input = [
    { first: "M.", last: "Moeen" },
    { first: "M.", last: "Saad" },
    { first: "M.", last: "Moeen" },
  ];

  const expected = [{ first: "M.", last: "Saad" }];

  const got = array.delete(input, { first: "M.", last: "Moeen" });
  expect(got).toEqual(expected);
});

test("array delete: exception on invalid array argument", () => {
  const input = { a: 1, b: 2, c: 3 };
  expect(() => array.delete(input, 4)).toThrow();
});
