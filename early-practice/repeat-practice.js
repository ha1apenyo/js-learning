const users = [
  { name: "Alice", age: 25, active: true },
  { name: "Bob", age: 30, active: false },
  { name: "Charlie", age: 22, active: true },
  { name: "Diana", age: 28, active: false },
  { name: "Eve", age: 35, active: true }
];

const name = users
.filter(user => user.active === true && user.age > 24)
.map(user => user.name);

console.log(name);