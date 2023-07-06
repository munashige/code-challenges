//Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates). 
function minValue(values){
    let arr= [...new Set(values)]
    return Number(arr.sort().join(""))
  }
  
  console.log(minValue([1,3,1]))

  //oneliner

  function minEX(vals) {
    return Number([...new Set(vals)].sort().join(""))
  }
