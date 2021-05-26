const Num = require("../../src/Num.js");

test("Num.is_number: check if number is appropriately determined", () => {
  const input = 300;
  const expected = true;

  const got = Num.is_number(input);
  expect(got).toBe(expected);
})

test("Num.is_number: check if string is appropriately determined (different type)", () => {
  const input = false;
  const expected = false;

  const got = Num.is_number(input);
  expect(got).toBe(expected);
})