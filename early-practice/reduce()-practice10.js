const users = [
  { name: "Alice", interests: ["music", "sports", "music"] },
  { name: "Bob", interests: ["music", "movies"] },
  { name: "Charlie", interests: ["sports", "gaming", "music"] },
  { name: "Diana", interests: [] }
];

const result = users.reduce((acc, user) => {
    const arr = user.interests.filter((item, index, arr) => arr.indexOf(item) === index);

    arr.forEach(interest => {
        acc[interest] = (acc[interest] || 0) + 1;
    });
    
    return acc;
}, {});

console.log(result);