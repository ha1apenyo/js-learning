const orders = [
  {
    id: 1,
    customer: "Alice",
    items: [
      { name: "phone", quantity: 1 },
      { name: "charger", quantity: 1 }
    ]
  },
  {
    id: 2,
    customer: "Bob",
    items: []
  },
  {
    id: 3,
    customer: "Charlie",
    items: [
      { name: "laptop", quantity: 0 },
      { name: "mouse", quantity: 2 }
    ]
  },
  {
    id: 4,
    customer: "Diana",
    items: [
      { name: "keyboard", quantity: 1 }
    ]
  }
];

const filter = orders
    .filter(order => order.items.length === 0 ||
    order.items.some(item => item.quantity === 0))
    .map(order => order.customer);

    console.log(filter);
