const { isGreaterThan, sum } = require("./script");

// test("adds 1 + 2 to equal 3", () => {
//   expect(sum(1, 2)).toBe(3);
// });

// describe("Cristian name matches stop", () => {
//   test("there is a stop Cristian", () => {
//     expect("Cristian").toMatch(/stop/);
//   });

//   test("there is no hello in Cristian", () => {
//     expect("Cristian").not.toMatch(/hello/);
//   });
// });

// test("check if there is milk in my shopping list", () => {
//   const shoppingList = ["diapers", "trash bags", "paper towels", "milk"];
//   expect(shoppingList).toContain("milk");
//   expect(shoppingList).toContain("diapers");
// });

// describe("checks for falsy or truthy values", () => {
//   const n = null;

//   test("null is falsy", () => {
//     expect(n).toBeFalsy();
//   });
// });

describe("2 is greater than 1 and 1 is lesser than 2", () => {
  test("2 is greater than 1", () => {
    const result = isGreaterThan(2, 1);
    expect(result).toBeTruthy();
  });

  test("1 is lesser than 2", () => {
    const result = isGreaterThan(1, 2);
    expect(result).toBeFalsy();
  });
});

//.toBe
//.toEqual
