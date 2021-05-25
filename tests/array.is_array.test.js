const array = require("../src/array.js");

test("array is_array: check if valid", () => {
  const input = [1,2,3,4,5]
  const expected = true
  const got = array.is_array(input)

  expect(got).toBe(expected)
})

test("array is_array: check if not array", () => {
  const input = {a: 1, b: 2, c: 3}
  const expected = false
  const got = array.is_array(input)

  expect(got).toBe(expected)
})