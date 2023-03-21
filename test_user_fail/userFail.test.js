const getUser = require("./userFail");

describe("User API", () => {
  it("should return a specific user by ID", async () => {
    const userID = 1;
    const user = await getUser(userID);

    expect(user).toHaveProperty("id", userID);
  });

  it("should throw a 404 error for an invalid user ID", async () => {
    const userID = 999;

    try {
      await getUser(userID);
    } catch (error) {
      expect(error).toHaveProperty(
        "message",
        `User with ID ${userID} not found.`
      );
    }
  });
});
