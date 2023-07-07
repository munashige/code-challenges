//Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits. 

function sumDigits(number) {
    let arr = String(Math.abs(number)).split("").reduce((a,b) => (+a) + (+b))
    return Number(arr)
  }

