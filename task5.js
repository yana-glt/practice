// Given this input: “3[asdf]” you have to generate an output string: “asdfasdfasdf”
// Given this input: “3[as2[df]]2[gh]” you have to generate an output string: “asdfdfasdfdfasdfdfghgh”

function decrypt(str){
    let array = [];
    let letters = '';
    let num = 0;
    for(let s of str){
        if(s === '['){
            array.push(letters);
            array.push(num);
            letters = '';
            num = 0;
        }
        else if(s === ']'){
            let currentNum = array.pop();
            let decodedString = array.pop();
            letters = decodedString + letters.repeat(currentNum);
        }
        else if(isNaN(s)){
            letters += s;
        }
        else{
            num += s;
        }
    }
    return letters;
}

console.log(decrypt('3[asdf]')); //asdfasdfasdf
console.log(decrypt('3[as2[df]]2[gh]')); //asdfdfasdfdfasdfdfghgh

//using regular expressions
function decrypt2(str){
    const regexp = /([0-9]{1,})\[([^\[\]]{1,})\]/;
    while(str.includes('[')){
        let matchers = str.match(regexp);
        let from = `${matchers[1]}[${matchers[2]}]`;
        let to = matchers[2].repeat(parseInt(matchers[1]));
        str = str.replace(from, to);
    }
    return str;
  }
  
console.log(decrypt2('3[asdf]')); //asdfasdfasdf
console.log(decrypt2('3[as2[df]]2[gh]')); //asdfdfasdfdfasdfdfghgh