const Hash = require("../../src/Hash.js");

test("object equals: check if two ojects are same (simple)", () => {
  const input_1 = { a: 1, b: 2, c: 3 };
  const input_2 = { a: 1, b: 2, c: 3 };
  const expected = true;

  const got = Hash.equals(input_1, input_2);
  expect(got).toBe(expected);
});

test("object equals: check if two ojects are same (complex)", () => {
  const input_1 = {
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

  const input_2 = {
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

  const expected = true;

  const got = Hash.equals(input_1, input_2);
  expect(got).toBe(expected);
});

test("object equals: check if two ojects are same (key order difference)", () => {
  const input_1 = {
    hobbies: ["Games", "Sports", "Study"],
    id: 1,
    location: {
      lng: 3000,
      lat: 4000,
      area: {
        country: {
          city: "Sample",
        },
      },
    },
    name: "Some name",
  };

  const input_2 = {
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

  const expected = true;

  const got = Hash.equals(input_1, input_2);
  expect(got).toBe(expected);
});

test("object equals: check if two ojects are not same (complex)", () => {
  const input_1 = {
    hobbies: ["Games", "Sports", "Study"],
    id: 1,
    location: {
      lng: 3000,
      lat: 4000,
      area: {
        country: {
          city: "Sample",
        },
      },
    },
    name: "Some name",
  };

  const input_2 = {
    id: 1,
    name: "Some name",
    hobbies: ["Games", "Sports", "Study"],
    location: {
      lng: 3000,
      lat: 4000,
      area: {
        country: {
          city: "Sample 2",
        },
      },
    },
  };

  const expected = false;

  const got = Hash.equals(input_1, input_2);
  expect(got).toBe(expected);
});

test("object equals: exception thrown on invalid arguments", () => {
  const input_1 = [1, 2, 3, 4, 5];
  const input_2 = [6, 7, 8, 9, 10];

  expect(() => {
    Hash.equals(input_1, input_2);
  }).toThrow();
});