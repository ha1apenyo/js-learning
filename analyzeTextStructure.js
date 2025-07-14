function analyzeTextStructure(text) {
    let totalChars = text.length;
    let words = text.match(/\b\w+\b/g) || [];
    let sentences = text.split(/[.!?]/).filter(x => x.trim() !== "");
    let mostFrequent = "";
    let maxCount = 0;
    let totalWords = words.length;
    let uniqeSet  = new Set();
    let freqMap = {};
    
    for (let word of words) {
        word = word.toLowerCase();

        uniqeSet.add(word);
        
        if(freqMap[word]) {
            freqMap[word]++;    
        } else {
            freqMap[word] = 1;
        }

        if (freqMap[word] > maxCount) {
            maxCount = freqMap[word];
            mostFrequent = word;

        }
    }
    let uniqueWords = uniqeSet.size;
    return {
    totalChars,
    words: totalWords,
    sentences: sentences.length,
    uniqueWords,
    mostFrequent
    };
} 

console.log(analyzeTextStructure("This is JS. JS is powerful! JS? Yes, JS."));

if (typeof module !== 'undefined') {
module.exports = analyzeTextStructure;
}