const products = [
  { type: 'food', name: 'Apple' },
  { type: 'tech', name: 'Laptop' },
  { type: 'food', name: 'Bread' },
  { type: 'tech', name: 'Phone' },
  { type: 'clothes', name: 'T-shirt' }
];

const result = products.reduce((accumulator, product) => {
    if (!accumulator[product.type]) {
        accumulator[product.type] = [product.name];
    } else {
        accumulator[product.type].push(product.name);
    }
    return accumulator;
}, {});

console.log(result);
