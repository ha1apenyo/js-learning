function groupByFirstLetter(arr) {
    const result = {};

    for (const word of arr) {
        const firstLetter = word[0].toLowerCase();

        if (!result[firstLetter]) {
            result[firstLetter] = [];
        }

        result[firstLetter].push(word);
    }
    return result;
}

console.log(groupByFirstLetter(['азбука', 'арфа','брат','бошка','бык','артист']));