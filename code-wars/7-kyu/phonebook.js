//Write a function that accepts an array of 10 integers (between 0 and 9) and 
//returns a string of those numbers in the form of a phone number.

function phonebook(nums) {
    let format = "(xxx) xxx-xxxx";
    for(let i in nums) {
        format = format.replace("x", nums[i])
    }
    return format
}
