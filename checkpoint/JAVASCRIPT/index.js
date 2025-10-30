let char = 0;
let word = 1; // Start at 1 assuming the sentence starts with a word
let vowel = 0;
let vowels = "aeiouAEIOU";

let sentence = prompt("Enter a sentence ending with a period ('.'):");

for (let i = 0; i < sentence.length; i++) {
    let ch = sentence[i];
    char++;

    if (ch === " ") {
        word++;
    }

    if (vowels.includes(ch)) {
        vowel++;
    }

    if (ch === ".") {
        break;
    }
}

console.log("Number of characters:", char);
console.log("Number of words:", word);
console.log("Number of vowels:", vowel);