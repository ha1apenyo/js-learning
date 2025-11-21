const messages = [
  { id: 1, text: "Hey, check out this cool site!" },
  { id: 2, text: "You won a free prize, click now!" },
  { id: 3, text: "Let's meet at 5" },
  { id: 4, text: "This is not spam, I promise" },
  { id: 5, text: "Buy cheap stuff here!!!" }
];

const spamWords = ["free", "prize", "buy", "click", "cheap", "spam"];

function getCleanMessages(messages) {
    let result = [];
    for (let message of messages) {
        let lowerText = message.text.toLowerCase();
        let isSpam = false;

        for (let word of spamWords) {
            if(lowerText.includes(word)) {
                isSpam = true;
                break;
            }
        }

        if (!isSpam) {
        result.push(message);
        }
    }
    return result;
}

console.log(getCleanMessages(messages));