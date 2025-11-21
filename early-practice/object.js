function countInObject(data) {
    let keysCount = Object.keys(data).length;
    let valuesCount = 0;
    for (let key in data) {
        let value = data[key]
        if (value !== null && value !== "" && value != undefined) {
            valuesCount++;
        }
    }
    return { keysCount, valuesCount };
}   

const user = {
    age: 21,
    name: null,
    regrets: "",
    girl: "Anastasiia",
    city: "Dnipro"
};

console.log(countInObject(user));