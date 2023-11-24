// You are going to be given a word. Your job is to return the middle character of the word. 
// If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:
// getMiddle("test") should return "es"
// getMiddle("testing") should return "t"
// getMiddle("middle") should return "dd"
// getMiddle("A") should return "A"

function getMiddle(str){
    let middle = str.length / 2;
    return str.length % 2 ? str.charAt(Math.floor(middle)) : str.slice((middle - 1), (middle + 1));
}

console.log(getMiddle("test")); // "es"
console.log(getMiddle("testing")); // "t"
console.log(getMiddle("middle")); // "dd"
console.log(getMiddle("A")); // "A"