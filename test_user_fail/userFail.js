async function getUser(userID) {
  try {
    const response = await fetch(
      `https://testapi.io/api/converse/resource/blogs/${userID}`
    );
    const data = await response.json();

    if (response.status === 404) {
      throw new Error(`User with ID ${userID} not found.`);
    }

    return data;
  } catch (error) {
    throw error;
  }
}

module.exports = getUser;
