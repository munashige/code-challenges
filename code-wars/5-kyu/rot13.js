//ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. 

function rot13(message){
    let dict = {
      A: 'N', B: 'O', C: 'P', D: 'Q', E: 'R', F: 'S', G: 'T',
      H: 'U', I: 'V', J: 'W', K: 'X', L: 'Y', M: 'Z', N: 'A',
      O: 'B', P: 'C', Q: 'D', R: 'E', S: 'F', T: 'G', U: 'H',
      V: 'I', W: 'J', X: 'K', Y: 'L', Z: 'M', a: 'n', b: 'o',
      c: 'p', d: 'q', e: 'r', f: 's', g: 't', h: 'u', i: 'v',
      j: 'w', k: 'x', l: 'y', m: 'z', n: 'a', o: 'b', p: 'c',
      q: 'd', r: 'e', s: 'f', t: 'g', u: 'h', v: 'i', w: 'j',
      x: 'k', y: 'l', z: 'm'
    };
    
    let arr = message.split("").map(key => {return dict[key] || key})
    return arr.join("")
  }
  
  console.log(rot13("TEST"))