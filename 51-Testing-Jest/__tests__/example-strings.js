const pass = "123456";

describe("Validate password", () => {
  test("six character length", () => {
    expect(pass).toHaveLength(6);
  });

  test("the password is not empty", () => {
    expect(pass).not.toHaveLength(0);
  });
});
