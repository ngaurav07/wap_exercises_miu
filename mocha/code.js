const max  = (a,b) => Math.max(a,b);

const maxOfThree = (a,b,c) => Math.max(...[a,b,c])


function isVowel(char) {
    return ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].includes(char);
}

function sum(numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

function multiply(numbers) {
    return numbers.reduce((acc, curr) => acc * curr, 1);
}

function reverse(str) {
    return str.split('').reverse().join('');
}

function findLongestWord(words) {
    return Math.max(...words.map(word => word.length));
}

function filterLongWords(words, i) {
    return words.filter(word => word.length > i);
}
