// Create a class Person and create 4 objects with name, age and address (Names: John, Anna, Rocky, Aviva). 
// Assign those 4 objects into an array and sort them by descending age. 
// Then create a function that will receive the array of objects as argument and return an array of boolean 
// depending on if the name is a palindrome or not (Expected result: [John: false, Anna: true, Rocky: false, Aviva: true]).

class Person{
    constructor(name, age, address){
        this.name = name;
        this.age = age;
        this.address = address;
    }
}
const person1 = new Person("John", 20, "London");
const person2 = new Person("Anna", 18, "Tokio");
const person3 = new Person("Rocky", 26, "Madrid");
const person4 = new Person("Aviva", 24, "Porto");
const arr = [];
arr.push(person1);
arr.push(person2);
arr.push(person3);
arr.push(person4);
  
function isNamePalindrome(array){
    return array.map(x => {
        // output = array of strings
        // if(x.name.toLowerCase() === x.name.toLowerCase().split('').reverse().join('')){
        //     return x.name + ': true';
        // }else{
        //     return x.name + ': false';
        // }
        // output = array of objects
        if(x.name.toLowerCase() === x.name.toLowerCase().split('').reverse().join('')){
            return {[x.name]: true};
        }else{
            return {[x.name]: false};
        }
    });
}

console.log(arr);
console.log(arr.sort((a,b) => b.age - a.age));
console.log(isNamePalindrome(arr));