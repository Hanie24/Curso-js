import { sum } from "../js/funciones";

describe("Testing functions ", () => {
  test("Sum of 20 + 30", () => {
    expect(sum(20, 30)).toBe(50);
  });
});
