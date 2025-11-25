const categories = [
  "electronics",
  "clothing",
  "electronics",
  "toys",
  "clothing",
  "toys",
  "toys"
];

function countCategories(arr) {
  const counts = arr.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});

  const sortedCategories = Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .map(item => item[0]);

  return { counts, sortedCategories };
}

const result = countCategories(categories);
console.log(result.counts);
console.log(result.sortedCategories);
