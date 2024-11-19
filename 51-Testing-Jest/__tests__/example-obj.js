const obj = {
  name: "Hanie",
  years: 31,
};

describe("Object testing", () => {
  test("The person is young", () => {
    expect(obj.years).toBeLessThan(35);
  });

  test("The person is...", () => {
    expect(obj.name).toBe("Hanie");
  });

  test("The person is not...", () => {
    expect(obj.name).not.toBe("Angela");
  });
});
