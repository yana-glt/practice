// Create a function that receives a String as a parameter and return True or False if the String is a Pangram. 
// (“The quick brown fox jumps over the lazy dog”).

function isPangram(string){
    const regexp = /([a-z])(?!.*\1)/gi;
    return (string.match(regexp) ?? []).length === 26;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog")); //true
console.log(isPangram("The five boxing wizards jump quickly.")); //true
console.log(isPangram("Not a pangram.")); // false
console.log(isPangram("")); //false