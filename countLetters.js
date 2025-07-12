function countLetters(text) {
    let lowerText = text.toLowerCase()
    const vowels = "aeiou"
    let countOfVowels = 0;
    let countOfConsonants = 0;

    for (let char of lowerText) {
    if (char >= 'a' && char <= 'z') {
        if (vowels.includes(char)) {
            countOfVowels++;
        } else {
            countOfConsonants++;
        }
    }
}

return { vowels: countOfVowels, consonants: countOfConsonants };

}

console.log(countLetters("Anastasiia"));