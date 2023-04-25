//check a string for a palindrome 
function palindromeCheck(string) {
    return string
    .split("")
    .reverse()
    .join("") == string
}

console.log(palindromeCheck("racecar"))

//no hax solution
function palindromeMe(string) {
    let result = [];
    for(let i = string.length -1 ; i >= 0; i--) {
        result.push(string[i])
    }
    return result.join("") == string
}
console.log(palindromeMe("racecar"))

//just reversing words

function reverseWords(string) {
  let target = string.split(" ");
  let result = target.map(word => [...word].reverse().join(""))
  return result.join(" ") 
}
console.log(reverseWords("hello world"))