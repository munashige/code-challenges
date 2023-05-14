// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 
//0 is neither positive nor negative. If the input is an empty array or is null, return an empty array.

function countPositivesSumNegatives(input) {
    return !input || !input.length ? [] : [
    input.filter(a => a > 0).length,
    input.filter(b => b < 0).reduce((c,d) => c +d, 0)
    ]
  }