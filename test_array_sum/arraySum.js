function sumArray(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

function sortAscending(numbers) {
  return numbers.sort((a, b) => a - b);
}

module.exports = { sumArray, sortAscending };
