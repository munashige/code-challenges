//Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

function doubleChar(str) {
    return str.split("").map(el=> el + el).join("")
   }

//regexp abuse

function doublEX(str) {
    return str.replace(/(.)/g, "$1$1")
}
