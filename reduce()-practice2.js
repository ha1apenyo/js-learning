const products = [
  { type: 'food', name: 'Apple' },
  { type: 'tech', name: 'Laptop' },
  { type: 'food', name: 'Bread' },
  { type: 'tech', name: 'Phone' },
  { type: 'clothes', name: 'T-shirt' }
];

const object = products.reduce((acc, product) => {
    acc[product.type] = (acc[product.type] || 0) + 1;
    return acc;
}, {});

console.log(object);