// Let's play! You have to return which player won! In case of a draw return Draw!

const rps = (p1, p2) => {
    let ops = ['rock', 'paper', 'scissors'];
    let p1w = "Player 1 won!";
    let p2w = "Player 2 won!";
    let draw = "Draw!"
  
    if (p1 === p2) {
      return draw;
    } else if (
      (p1 === ops[0] && p2 === ops[1]) ||
      (p1 === ops[1] && p2 === ops[2]) ||
      (p1 === ops[2] && p2 === ops[0])
    ) {
      return p2w;
    } else if (
      (p1 === ops[1] && p2 === ops[0]) ||
      (p1 === ops[2] && p2 === ops[1]) ||
      (p1 === ops[0] && p2 === ops[2])
    ) {
      return p1w;
    } else {
      return "Baka";
    }
  };