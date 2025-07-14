function countLettersByType(input) {
    let uppercase = 0;
    let lowercase = 0;
    let digits = 0;
    let others = 0;
    for (let char of input) {
        if (char >= 'A' && char <= 'Z') {
            uppercase++;
        } else if (char >= 'a' && char <= 'z') {
            lowercase++;
        } else if (char >= '0' && char <= '9') {
            digits++;
        } else {
            others++;
        }
    }
    return {
        uppercase: uppercase,
        lowercase: lowercase,
        digits: digits,
        others: others
    };
}

console.log(countLettersByType("JS Version 1.8 — Released in 1999!"));