const products = [
  { name: "Laptop", category: "Electronics", price: 1200, discount: true },
  { name: "Shampoo", category: "Cosmetics", price: 8, discount: false },
  { name: "TV", category: "Electronics", price: 800, discount: false },
  { name: "Phone", category: "Electronics", price: 900, discount: true },
  { name: "Book", category: "Education", price: 15, discount: false }
];

function findDiscountedProduct(categoryName) {
    const resultProduct = products.find(product => 
        product.category === categoryName
        && product.discount === true)

        return resultProduct;
}

console.log(findDiscountedProduct('Electronics'))