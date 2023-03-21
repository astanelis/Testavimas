const getUser = require("./user");

describe("User API", () => {
  it("should return a specific user by ID", async () => {
    const userID = 1;
    const user = await getUser(userID);

    expect(user).toHaveProperty("id", userID);
  });
});
