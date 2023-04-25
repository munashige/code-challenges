//biggest num in each arr
function biggestNum(arr) {
    let result =[];
    for(let i = 0; i< arr.length; i++) {
        let largest = arr[i][0]
        for(let j =  0; j< arr[i].length; j++) {
            if(arr[i][j] > largest) {
                largest = arr[i][j]
            }
        }
        result[i] = largest
    }
    return result
}

console.log(biggestNum([[1,2,4], [5,6,7], [1,12,1001]]))

//black magic

function bigNum(arr) {
    return arr
    .flat()
    .sort((a,b) => b-a)
    [0]
}

console.log(bigNum([[1,2,4], [4,5,15]]))