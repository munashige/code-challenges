//Your task is to write a function which returns the sum of following series upto nth term(parameter).

function SeriesSum(n)
{
  let result = 0
  let reverage = 1
  for(let i = 0; i< n; i++) {
    if(i === 0) {
      result = 1
    } else {
    reverage += 3
    result = result + (1/reverage)
      }
  }
  return result.toFixed(2)
}