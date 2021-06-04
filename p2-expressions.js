/*
    CIT 281 Project 2 expressions
    Name: Meagan Kiefer
*/

// Returns a random number between min (inclusive) and max (exclusive)
const getRandomInteger = function(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
let result = "";

// Returns a single, random, lowercase letter from the alphabet  constant
const getRandomLetter = function() {
    return alphabet[getRandomInteger(1, alphabet.length-1)];
}

// Returns the random length string
const getRandomString = function(minLength, maxLength) {
    let str = "";
    let length = Math.floor(Math.random() * (maxLength - minLength + 1) + minLength);
    for (let i = 0; i < length; i++) {
        str += getRandomLetter();
    }
    return str
}

// sorts the above string by spliting it to make it an array, sorting, then joining to return to a string
const getSortedString = function(string) { return string.split('').sort().join('') };


for (let i = 0; i < getRandomInteger(5, 26); i++) {
    result += getRandomLetter();
}

console.log(getSortedString(getRandomString(10, 20)));
