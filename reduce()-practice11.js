const users = [
  { name: "Alice", country: "USA" },
  { name: "Bob", country: "Canada" },
  { name: "Charlie", country: "USA" },
  { name: "Diana", country: "Germany" },
  { name: "Eve", country: "Canada" }
];

const result = users.reduce((acc, user) => {
    if(!acc[user.country]) {
        acc[user.country] = [];
    }
    
     acc[user.country].push(user.name);

    return acc;
}, {});



console.log(result);