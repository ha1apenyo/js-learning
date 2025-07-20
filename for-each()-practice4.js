const products = [
  { name: 'Laptop', category: 'electronics' },
  { name: 'Apple', category: 'food' },
  { name: 'TV', category: 'electronics' },
  { name: 'Bread', category: 'food' },
  { name: 'Cheese', category: 'food' },
  { name: 'Book', category: 'books' }
];

let counts = {};

products.forEach(product => {

      const cat = product.category;
      
      if(counts[cat]) { 
        counts[cat]++
      } 

      else {
        counts[cat] = 1;
      }
    
});

  for (let category in counts) {
        console.log(`Category ${category}: ${counts[category]} items.`);
      }

