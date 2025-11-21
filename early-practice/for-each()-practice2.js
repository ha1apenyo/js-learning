const users = [
  { name: 'Lena', hoursOnline: 3 },
  { name: 'Max', hoursOnline: 7 },
  { name: 'Nazar', hoursOnline: 1 },
  { name: 'Olha', hoursOnline: 5 }
];

const userStatus = [];

users.forEach((user) => {

    let status = user.hoursOnline >= 5 ? 'active' : 'inactive';
    let line = `User ${user.name} is ${status}`
    userStatus.push(line);

});

console.log(userStatus)