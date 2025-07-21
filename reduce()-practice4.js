const numbers = [20, 55, 130, 47, 88, 101, 5];

const arrayNumbers = numbers.reduce((acc, number) => {
    if(number < 50) {
        acc.push('low');

    } else if(number >= 50 && number <= 100) {
        acc.push('mid');

    } else if(number > 100){
        acc.push('high');

    }

    return acc;

}, []);

console.log(arrayNumbers);