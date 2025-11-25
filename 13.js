function countAndSortCategories(list) {
  let counts = list.reduce(function(obj, item) {
    if (obj[item]) {
      obj[item]++;
    } else {
      obj[item] = 1;
    }
    return obj;
  }, {});

  let sorted = Object.entries(counts).sort(function(a, b) {
    return b[1] - a[1];
  });

  return { counts, sorted };
}

let categories = [
  "electronics",
  "clothing",
  "electronics",
  "toys",
  "clothing",
  "toys",
  "toys"
];

let result = countAndSortCategories(categories);

console.log(result.counts);
console.log(result.sorted);
