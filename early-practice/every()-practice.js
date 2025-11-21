const customers = [
  {
    name: "Alice",
    orders: [
      { id: 1, paid: true },
      { id: 2, paid: true }
    ]
  },
  {
    name: "Bob",
    orders: [
      { id: 3, paid: false },
      { id: 4, paid: true }
    ]
  },
  {
    name: "Charlie",
    orders: []
  },
  {
    name: "Diana",
    orders: [
      { id: 5, paid: true },
      { id: 6, paid: true }
    ]
  },
  {
    name: "Eve",
    orders: [
      { id: 7, paid: false },
      { id: 8, paid: false }
    ]
  }
];

const unpaidOrder = customers
  .filter(customer => customer.orders.length > 0 &&
  !customer.orders.every(order => order.paid === true))
  .map(customer => customer.name);

console.log(unpaidOrder);