/*
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. 
The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
*/


function duplicateCount(str) {
    let res = str.toLowerCase().split("").filter((el, id) => str.split("").indexOf(el) !== id)
    return new Set(res).size
}
