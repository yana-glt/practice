// Write a function that receives a number as a parameter (123456) and returns a String (“1+2+3+4+5+6”) as output.

function makeString(number){
    return String(number).split('').join('+');
}

console.log(makeString(123456));