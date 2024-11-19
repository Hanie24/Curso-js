const array = ["uno", "dos", "tres"];

describe("Array testing", () => {
  test("The array must have three elements", () => {
    expect(array).toHaveLength(3);
  });

  test("The array must not be empty", () => {
    expect(array).not.toHaveLength(0);
  });
});
