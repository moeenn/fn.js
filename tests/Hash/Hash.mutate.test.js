import Hash from "../../src/Hash.mjs";

test("object set: set property of an object (first level)", () => {
  const input = { a: 1, b: 2, c: 3 };
  const expected = { a: 1, b: 2, c: 300 };

  const got = Hash.mutate(input, (input) => {
    input.c = 300;
    return input;
  });

  expect(got).toEqual(expected);
});

test("object set: set property of an object (nested level)", () => {
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

  const expected = {
    id: 1,
    name: "Some name",
    hobbies: ["Games", "Sports", "Study"],
    location: {
      lng: 3000,
      lat: 4000,
      area: {
        country: {
          city: "Example",
        },
      },
    },
  };

  const got = Hash.mutate(input, (input) => {
    input.location.area.country.city = "Example";
    return input;
  });

  expect(got).toEqual(expected);
});
