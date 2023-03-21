const get = require("./fetch");

describe("get", () => {
  test("should return a blog post by id", async () => {
    const blogPost = await get(1);
    expect(blogPost.id).toBe(1);
  });
});
