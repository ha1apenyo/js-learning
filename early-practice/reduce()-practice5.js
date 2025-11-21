const data = [
  { category: 'food', value: 120 },
  { category: 'clothes', value: 80 },
  { category: 'tech', value: 300 },
  { category: 'food', value: 150 },
  { category: 'clothes', value: 200 },
  { category: 'books', value: 20 }
];

const filteredCategories = data.reduce((acc, cat) => {
    if(cat.value > 100) {
        if(!acc.find(category => category === cat.category)) {
             acc.push(cat.category);
        }
       
    }
    return acc;
}, []);

console.log(filteredCategories);