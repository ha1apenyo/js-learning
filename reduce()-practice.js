const words = ["JavaScript", "is", "awesome"];

const result = words.reduce((acc, word) => {
    return acc + ' ' + word;
},'');

console.log(result.trim());