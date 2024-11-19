const obj = {
  name: "Hanie",
  balance: 500,
  type: "premium",
};

describe("Object testing", () => {
  test("The person is Hanie", () => {
    expect(obj).toMatchSnapshot("Hanie");
  });
});
