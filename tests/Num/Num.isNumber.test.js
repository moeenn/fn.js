import Num from "../../src/Num.mjs";

test("Num.isNumber: check if number is appropriately determined", () => {
  const input = 300;
  const expected = true;

  const got = Num.isNumber(input);
  expect(got).toBe(expected);
})

test("Num.isNumber: check if string is appropriately determined (different type)", () => {
  const input = false;
  const expected = false;

  const got = Num.isNumber(input);
  expect(got).toBe(expected);
})

test("Num.isNumber: check if string is appropriately determined (different type)", () => {
  const input = "300";
  const expected = false;

  const got = Num.isNumber(input);
  expect(got).toBe(expected);
})