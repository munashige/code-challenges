//takes an array and returns even numbers
function filterEvenNumbers(arr) {
    return arr.filter(a => a % 2 === 0)
}

console.log(filterEvenNumbers([1,2,3,4]))

//in case no built-in methods allowed:
function evenMe(arr) {
    let result = [];
    for(let i = 0; i <arr.length; i++) {
        if (arr[i] % 2 === 0) {
            result.push(arr[i])
        }
    }
    return result
}

console.log(evenMe([1,2,3,4]))