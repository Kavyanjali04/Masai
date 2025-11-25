function processProducts(items) {
  let names = items.map(function(item) {
    return item.name;
  });

  items.forEach(function(item) {
    if (item.price > 50) {
      console.log(item.name + " is above $50");
    } else {
      console.log(item.name + " is below $50");
    }
  });

  return names;
}

let data = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 20 }
];

processProducts(data);
xdddddddddddddd