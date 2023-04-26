/*
Trolls are attacking your comment section!
A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
Your task is to write a function that takes a string and return a new string with all vowels removed.
For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
*/

//quickest solution, builtin + regex
function disemvowel(str) {
    return str.replace(/[aeiou]/gi, "")
  };

//without built-in methods or regex

function disemvowelEx(str) {
    let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    let result = "";
    for(let i = 0; i< str.length; i++) {
        let target = str[i];
        if(vowels.indexOf(target) == -1) {
            result += target
        }
    }
    return result;
}
