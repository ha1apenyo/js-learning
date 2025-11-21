const products = [
  { name: "Laptop", category: "Electronics", price: 1200 },
  { name: "Shampoo", category: "Cosmetics", price: 8 },
  { name: "TV", category: "Electronics", price: 800 },
  { name: "Book", category: "Education", price: 15 },
  { name: "Phone", category: "Electronics", price: 900 },
];

function getDiscountedProducts(products, discount) {
   const filtredProducts = products
   .filter(product => product.category === 'Electronics')
   .map(product =>({
    name: product.name,
    category: product.category,
    price: product.price - product.price * discount
   })); 
   return filtredProducts;
   }

   console.log(getDiscountedProducts(products, 0.1));
