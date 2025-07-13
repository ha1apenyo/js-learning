function statisticsForText(text) {
    
      text = text.toLowerCase();
      let totalChars = text.length;
      let vowels = 0;
      let consonants = 0;
      let digits = 0;
      let others = 0;
      const vowelList = 'aeiou';

      for (let char of text) {
        if (vowelList.includes(char)) {
            vowels++;
        } else if (char >= 'a' && char <= 'z') {
            consonants++;
        } else if (char >= '0' && char <= '9') {
            digits++;
        } else {
            others++;
        }
    }
    return { totalChars, vowels, consonants, digits, others}
} 
console.log(statisticsForText("Daniil was born in 2004, and loves JS! <3"));