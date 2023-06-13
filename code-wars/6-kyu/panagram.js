/*
A pangram is a sentence that contains every single letter of the alphabet at least once. 
For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/

function isPangram(str){
    let regx = /[a-z]/g
    let alph = "abcdefghijklmnopqrstuvwxyz"
    let tar = str.toLowerCase().match(regx).sort() 
    return [...new Set(tar)].join("") == alph
  }
  
  console.log(isPangram("The quick brown fox jumps over the lazy dog."))

  //oneliner

const panagramEX = str => new Set(str.toLowerCase().replace(/[^a-z]/gi, "")).size == 26

console.log(panagramEX("The quick brown fox jumps over the lazy dog"))
