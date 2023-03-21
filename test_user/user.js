async function getUser(userID) {
  const response = await fetch(
    `https://testapi.io/api/converse/resource/blogs/${userID}`
  );
  const data = await response.json();

  return data;
}

module.exports = getUser;
