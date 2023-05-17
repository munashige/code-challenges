//Rreplace every letter with its position in the alphabet.
//If anything in the text isn't a letter, ignore it and don't return it.

function alphabetPosition(text) {
    let dict = "abcdefghijklmnopqrstuvwxyz";
    let result = [];
    for(let i = 0; i<text.length; i++) {
      let char = text[i].toLowerCase()
      let index = dict.indexOf(char)
      if(index !== -1) {
        result.push(index + 1)
      }
    }
    return result.join(" ")
  }

  //quick kata

  function alphabetEX(arr) {
      return arr.split("").toLowerCase().map(a => a.charCodeAt(0) - 96).filter(b => b > 0 && b <27).join("  ")
  }