async function getUser(userID) {
  try {
    const response = await fetch(
      `https://testapi.io/api/converse/resource/blogs/${userID}`
    );
    const data = await response.json();

    console.log(`response: ${JSON.stringify(response)}`); // log response data
    console.log(`data: ${JSON.stringify(data)}`); // log response data

    if (response.status === 404) {
      throw new Error(`User with ID ${userID} not found.`);
    }

    return data;
  } catch (error) {
    throw error;
  }
}

module.exports = getUser;
