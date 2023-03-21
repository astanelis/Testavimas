async function get(id) {
  const result = await fetch(
    `https://testapi.io/api/converse/resource/blogs/${id}`
  );
  return await result.json();
}

module.exports = get;
