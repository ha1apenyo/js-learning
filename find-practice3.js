const products = [
  { name: "Laptop", price: 1200, discount: 0.1 },
  { name: "TV", price: 900, discount: 0.15 },
  { name: "Phone", price: 850, discount: 0.05 },
  { name: "Headphones", price: 300, discount: 0 },
  { name: "Book", price: 20, discount: 0.2 }
];

const affordableProduct = products
    .map(product => {
        let finalPrice = product.price - product.price * product.discount
        return {
            ...product,
            finalPrice: finalPrice
        };
    })
    .find(product => product.price < 1000);

console.log(affordableProduct);