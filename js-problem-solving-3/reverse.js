const greetings = "i love you";

function reverseStrung(text) {
    let rev = '';
    for (const letter of text) {
        rev = rev + letter;
        console.log(letter);
    }
}

const reverseOutpur = reverseStrung(greetings);
console.log(reverseOutpur);