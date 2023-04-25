// find sum of all ingeres in an array
function sumAll(arr) {
    return arr.reduce((a,b) => a + b)
}
console.log(sumAll([1,2,3]))

//no hax solution

function sumMe(nums) {
    let result = 0
    for(let i=0; i< nums.length; i++) {
        result += nums[i]
    }
    return result
}

console.log(sumMe([1,2,3]))