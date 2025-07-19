const cart = [
  { name: "Laptop", price: 1200 },
  { name: "Phone", price: 800 },
  { name: "Mouse", price: 50 },
  { name: "Notebook", price: 10 }
];

const bannedItems = ["Phone", "Gun", "Alcohol"];

function getAvailableCartItems(cart) {
    let allowedItems = [];
    for (let item of cart) {
    if (!bannedItems.includes(item.name)) {
            allowedItems.push(item);
        }        
    }
    return allowedItems;
}

console.log(getAvailableCartItems(cart));