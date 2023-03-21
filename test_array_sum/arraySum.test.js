const { sumArray, sortAscending } = require("./arraySum");
describe("sumArray", () => {
  test("should retun the sum of an array of numbers", () => {
    const numbers = [1, 2, 3, 4, 5];
    const expectedResult = 15;
    const actualResult = sumArray(numbers);
    expect(actualResult).toBe(expectedResult);
  });
  test("should return 0 if the array is empty", () => {
    const numbers = [];
    const expectedResult = 0;
    const actualResult = sumArray(numbers);
    expect(actualResult).toBe(expectedResult);
  });
  test("should return the number itself from an array with one number", () => {
    const numbers = [5];
    const expectedResult = 5;
    const actualResult = sumArray(numbers);
    expect(actualResult).toBe(expectedResult);
  });
});

describe("sortAscending", () => {
  test("should retunr an array of numbers sorted in ascending order", () => {
    const numbers = [5, 2, 3, 1, 4];
    const expectedResult = [1, 2, 3, 4, 5];
    const actualResult = sortAscending(numbers);
    expect(actualResult).toEqual(expectedResult);
  });
  test("should retun an empty array if the array is empty", () => {
    const numbers = [];
    const expectedResult = [];
    const actualResult = sortAscending(numbers);
    expect(actualResult).toEqual(expectedResult);
  });
  test("should retun the number its from ant array with one number", () => {
    const numbers = [5];
    const expectedResult = [5];
    const actualResult = sortAscending(numbers);
    expect(actualResult).toEqual(expectedResult);
  });
});
