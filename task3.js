// Write a function that checks if two Strings are Anagrams. (“Thomas Edison”, “notes said ‘Ohm’“)

function solution(str1, str2){
    str1 = str1.replace(/[\'\"\`\s]/g, '').toLowerCase();
    str2 = str2.replace(/[\'\"\`\s]/g, '').toLowerCase();
    // for all non-word characters:
    // str1 = str1.replace(/[\W]/g, '').toLowerCase();
    // str2 = str2.replace(/[\W]/g, '').toLowerCase();
    if (str1.length !== str2.length) {
        return false;
    }
    return str1.split('').sort().join('') === str2.split('').sort().join('');
}

console.log(solution("Thomas Edison", "notes said 'Ohm'")); // true
console.log(solution("Thomas Edison", "notes said Ohm")); // true
console.log(solution("TThomas Edison", "notes said 'Ohm'")); // false