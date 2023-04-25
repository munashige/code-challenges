//find  common integers within two arrays
function findCommon(arr1, arr2) {
    let result = [];
    for(let i = 0; i< arr1.length; i++) {
        for(let j = 0; j < arr2.length; j++) {
            if(arr1[i] === arr2[j]) {
                result.push(arr1[i], arr2[j])
            }
        }
    }
    return [...new Set(result)]
}

console.log(findCommon([1,2,3], [3,2,1]))

//builtin methods
function findMe(arr1, arr2) {
    let newarr =  arr1.concat(arr2)
    .filter((a) => !arr1.includes(a) || !arr2.includes(a))
    return newarr
}

console.log(findMe([1,2,3], [1,2,4]))