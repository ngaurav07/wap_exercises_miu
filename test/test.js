function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

function maxOfThree(a, b, c) {
    if (a > b && a > c) {
        return a;
    } else if (b > c) {
        return b;
    } else {
        return c;
    }
}

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

function myFunctionTest(expected, functionToTest) {
    if (expected === functionToTest()) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED";
    }
}

console.log("Expected output of max(20, 10) is 20 and " + myFunctionTest(20, function() { return max(20, 10); }));
console.log("Expected output of maxOfThree(10, 20, 30) is 30 and " + myFunctionTest(30, function() { return maxOfThree(10, 20, 30); }));
console.log("Expected output of isVowel('a') is true and " + myFunctionTest(true, function() { return isVowel('a'); }));
console.log("Expected output of isVowel('b') is false and " + myFunctionTest(false, function() { return isVowel('b'); }));
console.log("Expected output of sum([1, 2, 3, 4]) is 10 and " + myFunctionTest(10, function() { return sum([1, 2, 3, 4]); }));
console.log("Expected output of multiply([1, 2, 3, 4]) is 24 and " + myFunctionTest(24, function() { return multiply([1, 2, 3, 4]); }));
console.log("Expected output of reverse('jag testar') is 'ratset gaj' and " + myFunctionTest('ratset gaj', function() { return reverse('jag testar'); }));
console.log("Expected output of findLongestWord(['apple', 'banana', 'cherry']) is 6 and " + myFunctionTest(6, function() { return findLongestWord(['apple', 'banana', 'cherry']); }));
console.log("Expected output of filterLongWords(['apple', 'banana', 'cherry'], 5) is ['banana', 'cherry'] and " + myFunctionTest(['banana', 'cherry'].toString(), function() { return filterLongWords(['apple', 'banana', 'cherry'], 5).toString(); }));