function capitalizeUsers(arr) {
    return arr.map(user => {
        return {
            name: user.name[0].toUpperCase() + user.name.slice(1),
            age: user.age
        };
    });
}

console.log(capitalizeUsers([{name: 'daniil', age: 21}, {name: 'anastasiia', age: 21}]));