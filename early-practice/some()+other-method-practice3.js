const orders = [
  {
    customer: "Alice",
    items: ["phone", "charger"],
    status: "confirmed"
  },
  {
    customer: "Bob",
    items: ["laptop"],
    status: "pending"
  },
  {
    customer: "Charlie",
    items: [],
    status: "confirmed"
  },
  {
    customer: "Diana",
    items: ["keyboard", "monitor"],
    status: "confirmed"
  },
  {
    customer: "Eve",
    items: ["mouse"],
    status: "pending"
  },
  {
  customer: "Mike",
  items: ["mouse"],
  status: "confirmed"
}
];

const selectedOrders = orders
    .filter(order => order.status === 'pending')
    .filter (order =>
        orders.some(other =>
            other !== order &&
        JSON.stringify(other.items) === JSON.stringify(order.items)))
    .map(order => order.customer);

    console.log(selectedOrders);