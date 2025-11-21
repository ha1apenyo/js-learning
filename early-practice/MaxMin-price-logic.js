const products = [
  { name: "Laptop", category: "Electronics", price: 1200 },
  { name: "Shampoo", category: "Cosmetics", price: 8 },
  { name: "TV", category: "Electronics", price: 800 },
  { name: "Book", category: "Education", price: 15 },
  { name: "Phone", category: "Electronics", price: 900 }
];

let maxPrice = null;

for (let product of products) {
    if (maxPrice === null || product.price > maxPrice.price) {
        maxPrice = product;
    }
}
console.log(maxPrice);