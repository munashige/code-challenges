/*
You are given an odd-length array of integers, in which all of them are the same, except for one single number.
Complete the method which accepts such an array, and returns that single different number.
The input array will always be valid! (odd-length >= 3)
*/

function stray(num) {
    let res =[]
    for(let i= 0; i< num.length; i++) {
      if(num.indexOf(num[i]) == num.lastIndexOf(num[i])) {
        res.push(num[i])
      }
    }
    return +res
  }


//xor operator

function strayEX(num) {
    return num.reduce((a,b) => a^b)
}
