import math from "./math";

test("adds 1 + 2 to equal 3", () => {
  expect(math.add(1, 2)).toBe(3);
});

test("subtracts 5 - 3 to equal 2", () => {
  expect(math.subtract(5, 3)).toBe(2);
});
