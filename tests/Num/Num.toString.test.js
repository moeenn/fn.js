import Num from "../../src/Num.mjs";

test("Num.toString: check if number is converted to string", () => {
  const input = 300;
  const expected = "300";

  const got = Num.toString(input);
  expect(got).toBe(expected);
})