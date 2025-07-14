const products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 600 },
  { name: "Tablet", price: 800 }
];

function applyDiscount(products) {
    
    return products.map(product =>{

        let newPrice = product.price * 0.9;

        let discounted = true;

        return {
            ...product,
            price: newPrice,
            discounted: discounted
        };
    }); 
}

console.log(applyDiscount(products));