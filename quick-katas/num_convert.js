//one that uses arrays

function convertMe(num) {
    let dict = [

        [100, "C"],
        [90, "XC"],
        [50, "L"],
        [40, "XL"],        
        [10, "X"],
        [9, "IX"],        
        [5, "V"],
        [4, "IV"],
        [1, "I"]

    ];

    if(num === 0) {
        return ""
    } for(let i = 0; i< dict.length; i++) {
        if(num >= dict[i][0]) {
            return dict[i][1] + convertMe(num - dict[i][0])
        }  
    }
}

console.log(convertMe(36))

//this one does not use arrays

function numConvert(num) {
    switch(true) {
        case(num === 0): {return ""};
        case(num>= 100): {return "C" + numConvert(num-100)};
        case(num >= 90): {return "XC" + numConvert(num - 90)};
        case(num >= 50): {return "L" + numConvert(num - 50)};
        case (num >= 40): {return "XL" + numConvert(num - 40)};
        case (num >= 10): {return "X" + numConvert(num - 10)};
        case (num >= 9): {return "IX" + numConvert(num - 9)};
        case(num >= 5): {return "V" + numConvert(num - 5)};
        case (num >= 4): {return "IV" + numConvert(num - 4)};
        case (num >= 1): {return "I" + numConvert(num - 1)}
    }
}

console.log(numConvert(139))