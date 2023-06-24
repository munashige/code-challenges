//Your goal is to return multiplication table for number that is always an integer from 1 to 10.

function multiTable(number) {
    let res = ""
    for(let i = 1; i <= 10; i++) {
      res+= i + ` * ${number} = `+ number * i + `\n`
    } 
    return res.replace(/\n$/, "")
  }

//oneliner
function multiEX(num) {
    return [...Array(10)].map((e,i) => `${i+1} * ${num} = ${num*i+num}`).join("\n")
}
