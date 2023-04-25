//find odd in array
function findOdd(arr) {
    let result = []
    for(let i=0; i< arr.length; i++) {
        if(arr[i] % 2 !== 0) {
            result.push(arr[i])
        }
    }
    return result
}

console.log(findOdd([1,2,3,5]))

// 