function subtraction(a, b) {
  return a - b;
}

describe("Testing functions ", () => {
  test("Subtraction of 10 - 5", () => {
    expect(subtraction(10, 5)).toBe(5);
  });
});
