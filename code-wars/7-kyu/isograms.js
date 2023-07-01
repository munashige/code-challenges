/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
Implement a function that determines whether a string that contains only letters is an isogram. 
Assume the empty string is an isogram. Ignore letter case.
*/

function isIsogram(s){
    let res = [];
    let str = s.toLowerCase()
    for(let i = 0; i< str.length; i++) {
      if(str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
        res.push(str[i])
      }
    }
    return res.length? false : true
  }


//regexp solution


function isogramRX(str) {
    return !/(\w).*\1/i.test(str)
}

//oneliner

function isogramEX(str) {
    return new Set(str.toUpperCase()).size == str.length
}
