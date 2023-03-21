const { add, subtract, multiply, divide } = require("./task");

describe("Test the add function", () => {
  test("The function correctly adds two positive numbers", () => {
    const result = add(2, 3);
    expect(result).toBe(5);
  });

  test("The function correctly adds two negative numbers", () => {
    const result = add(-2, -3);
    expect(result).toBe(-5);
  });

  test("The function correctly adds a positive number and a negative number", () => {
    const result = add(2, -3);
    expect(result).toBe(-1);
  });
});

describe("Test the subtract function", () => {
  test("The function correctly subtracts two positive numbers", () => {
    const result = subtract(3, 2);
    expect(result).toBe(1);
  });

  test("The function correctly subtracts two negative numbers", () => {
    const result = subtract(-3, -2);
    expect(result).toBe(-1);
  });

  test("The function correctly subtracts a positive number and a negative number", () => {
    const result = subtract(3, -2);
    expect(result).toBe(5);
  });
});

describe("Test the multiply function", () => {
  test("The function correctly multiplies two positive numbers", () => {
    const result = multiply(3, 2);
    expect(result).toBe(6);
  });

  test("The function correctly multiplies two negative numbers", () => {
    const result = multiply(-3, -2);
    expect(result).toBe(6);
  });

  test("The function correctly multiplies a positive number and a negative number", () => {
    const result = multiply(3, -2);
    expect(result).toBe(-6);
  });
});
describe("Test the divide function", () => {
  test("The function correctly divides two positive numbers", () => {
    const result = divide(6, 2);
    expect(result).toBe(3);
  });

  test("The function correctly divides two negative numbers", () => {
    const result = divide(-6, -2);
    expect(result).toBe(3);
  });

  test("The function correctly divides a positive number and a negative number", () => {
    const result = divide(6, -2);
    expect(result).toBe(-3);
  });

  test("The function correctly handles division by zero", () => {
    const result = divide(6, 0);
    expect(result).toBe(Infinity);
  });
});
