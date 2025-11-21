const suppliers = [
  {
    name: "EcoFoods",
    verified: true,
    products: [
      { name: "Apples", quality: "good" },
      { name: "Bananas", quality: "good" }
    ]
  },
  {
    name: "FastFruit",
    verified: false,
    products: [
      { name: "Oranges", quality: "good" },
      { name: "Melons", quality: "good" }
    ]
  },
  {
    name: "TrustyFarm",
    verified: true,
    products: [
      { name: "Plums", quality: "good" },
      { name: "Peaches", quality: "bad" }
    ]
  },
  {
    name: "EmptyCo",
    verified: true,
    products: []
  }
];

const found = suppliers
    .find(supplier => supplier.verified &&
    supplier.products.length > 0 &&
    supplier.products.every(product => product.quality === 'good')
    )?.name;

console.log(found);