const products = [
  { name: "Laptop", category: "electronics" },
  { name: "TV", category: "electronics" },
  { name: "Apple", category: "food" },
  { name: "Bread", category: "food" },
  { name: "Book", category: "books" },
  { name: "Cheese", category: "food" }
];

const categoryCount = products.reduce((acc, product) => {
    if(acc[product.category]) {
        acc[product.category]++;
    } else {
        acc[product.category] = 1;
    } 
    return acc;

},{});

const categoryStats = Object.entries(categoryCount)
   .map(([category, count]) => ({category, count}))
   .sort((a, b) => b.count - a.count);

console.log(categoryStats);