import Hash from "../../src/Hash.mjs";

test("object get: get first level property", () => {
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

  const expected = "Some name";
  const got = Hash.get(input, "name");

  expect(got).toBe(expected);
});

test("object get: get nested level property", () => {
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

  const expected = "Sample";
  const got = Hash.get(input, "location.area.country.city");

  expect(got).toBe(expected);
});

test("object get: exception on invalid object argument", () => {
  const input = [1, 2, 3, 4, 5];
  expect(() => {
    Hash.get(input, "2");
  }).toThrow();
});

test("object get: exception on invalid property argument", () => {
  const input = { a: 1, b: 2, c: 3 };
  expect(() => {
    Hash.get(input, 3);
  }).toThrow();
});