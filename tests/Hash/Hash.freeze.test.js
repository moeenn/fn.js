import Hash from "../../src/Hash.mjs";

test("object freeze: immutability of frozen object (simple)", () => {
  const input = { a: 1, b: 2, c: 3 };
  const expected = { a: 1, b: 2, c: 3 };

  const got = Hash.freeze(input);
  expect(got).toEqual(expected);

  expect(() => (got.a = 400)).toThrow();
});

test("object freeze: immutability of frozen object (simple)", () => {
  const input = {
    id: 1,
    name: "Some name",
    hobbies: ["Games", "Sports", "Study"],
    location: {
      lng: 3000,
      lat: 4000,
      area: {
        country: {
          city: "Sample",
        },
      },
    },
  };

  const got = Hash.freeze(input);
  expect(() => (got.location.area.country.city = 400)).toThrow();
});
