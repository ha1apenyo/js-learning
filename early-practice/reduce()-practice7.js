const users = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 36 },
  { name: "David", age: 15 },
  { name: "Eve", age: 27 }
];

const groupedByAge = users.reduce((acc, user) => {
    if(user.age < 18) {
        acc.under18.push(user.name);
    } 

    else if(user.age >= 18 && user.age <= 30) {
        acc['from18to30'].push(user.name);
    }

    else {
        acc['over30'].push(user.name);
    }

    return acc;

}, {
    under18: [],
    from18to30: [],
    over30: []
});

console.log(groupedByAge);
