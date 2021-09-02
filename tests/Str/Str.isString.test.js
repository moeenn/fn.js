import Str from "../../src/Str.mjs";

test("Str.isString: check if string is appropriately determined", () => {
  const input = "Something";
  const expected = true;

  const got = Str.isString(input);
  expect(got).toBe(expected);
})

test("Str.isString: check if string is appropriately determined (different type)", () => {
  const input = false;
  const expected = false;

  const got = Str.isString(input);
  expect(got).toBe(expected);
})