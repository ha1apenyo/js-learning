const products = [
  { name: "Laptop", category: "Electronics", price: 1200 },
  { name: "Shampoo", category: "Cosmetics", price: 8 },
  { name: "TV", category: "Electronics", price: 800 },
  { name: "Book", category: "Education", price: 15 },
  { name: "Phone", category: "Electronics", price: 900 },
  { name: "Headphones", category: "Electronics", price: 900 }
];

const resultProduct = products
    .filter(product => product.category === 'Electronics')
    .find(product => product.price === 900);

console.log(resultProduct);