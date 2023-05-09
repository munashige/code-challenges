/*
Complete the solution so that it splits the string into pairs of two characters. 
If the string contains an odd number of characters then it should replace the missing 
second character of the final pair with an underscore ('_').
*/

function solution(str){
    let arr = "";
    if(str.length) {
      if(str.length % 2 === 1) {
        arr = str + "_"
        return arr.match(/.{2}/g)
      } else {
        return str.match(/.{2}/g)
      }
    } else {
      return []
    }
  }
  
  console.log(solution("abcdef"))