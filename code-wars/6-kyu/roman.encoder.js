function solution(number){
    const dict = [
      [1000, "M"],
      [900, "CM"],
      [500, "D"],
      [100, "C"],
      [90, "XC"],
      [50, "L"],
      [40, "XL"],
      [10, "X"],
      [9, "IX"],
      [5, "V"],
      [4, "IV"],
      [1, "I"]
    ]
    
    if(number === 0) {
      return ""
    } for(let i =0; i< dict.length; i++) {
      if(number  >= dict[i][0]) {
        return dict[i][1] + solution(number - dict[i][0])
      }
    }
  }
  
