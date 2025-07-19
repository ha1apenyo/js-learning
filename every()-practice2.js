const suppliers = [
  {
    name: "FreshFoods",
    products: [
      { name: "Apples", quality: "good" },
      { name: "Bananas", quality: "good" }
    ]
  },
  {
    name: "CheapFruits",
    products: [
      { name: "Oranges", quality: "bad" },
      { name: "Melons", quality: "good" }
    ]
  },
  {
    name: "TrustedFarms",
    products: [
      { name: "Pears", quality: "good" },
      { name: "Plums", quality: "good" }
    ]
  },
  {
    name: "MysterySupplier",
    products: []
  }
];

const selectedSupplires = suppliers
    .filter(supplier => supplier.products.length > 0 &&
    supplier.products.some(product => product.quality !== "good"))
    //!supplier.products.every(product => product.quality === "good"))
    .map(supplier => supplier.name);

console.log(selectedSupplires);