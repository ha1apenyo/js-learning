const users = [
  { name: "Alice", role: "admin" },
  { name: "Bob", role: "editor" },
  { name: "Alice", role: "editor" },
  { name: "Charlie", role: "user" },
  { name: "Diana", role: "guest" },
  { name: "Eve", role: "admin" }
];

const allowedRoles = ["admin", "editor"];

const sortedUsers = users
    .filter(user => allowedRoles.includes(user.role))
    .map(user => user.name);

const uniqueUsers = [... new Set(sortedUsers)];

console.log(uniqueUsers);