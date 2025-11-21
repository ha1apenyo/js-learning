const users = [
  { name: "Alice", cart: ["phone", "charger"] },
  { name: "Bob", cart: [] },
  { name: "Charlie", cart: ["headphones"] },
  { name: "Diana", cart: ["keyboard", "mouse", "monitor"] },
  { name: "Eve", cart: [] }
];

const emptyCart = users
    .filter(user => user.cart.length === 0)
    .filter(user =>
        users.some(other => 
            other !== user && other.cart.length === 0
        )
    )
    .map(user => user.name);

    console.log(emptyCart);
    
