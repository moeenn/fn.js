import List from "../../src/List.mjs";

test("array delete: check all items are removed from array (simple)", () => {
  const input = ["some", "games", "are", "hard", "games"];
  const expected = ["some", "are", "hard"];

  const got = List.remove(input, "games");
  expect(got).toEqual(expected);
});

test("array delete: check all items are removed from array (simple 2)", () => {
  const input = [1, 2, 3, 4, 5, 6, 7];
  const expected = [2, 3, 4, 5, 6, 7];

  const got = List.remove(input, 1);
  expect(got).toEqual(expected);
});

test("array delete: check all items are deleted (objects)", () => {
  const input = [
    { first: "M.", last: "Moeen" },
    { first: "M.", last: "Saad" },
    { first: "M.", last: "Moeen" },
  ];

  const expected = [{ first: "M.", last: "Saad" }];

  const got = List.remove(input, { first: "M.", last: "Moeen" });
  expect(got).toEqual(expected);
});

test("array delete: exception on invalid array argument", () => {
  const input = { a: 1, b: 2, c: 3 };
  expect(() => List.remove(input, 4)).toThrow();
});
