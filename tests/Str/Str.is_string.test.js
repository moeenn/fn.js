const Str = require("../../src/Str.js");

test("Str.is_string: check if string is appropriately determined", () => {
  const input = "Something";
  const expected = true;

  const got = Str.is_string(input);
  expect(got).toBe(expected);
})

test("Str.is_string: check if string is appropriately determined (different type)", () => {
  const input = false;
  const expected = false;

  const got = Str.is_string(input);
  expect(got).toBe(expected);
})