//We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the following rules:
// if x > y: 3 points (win); if x < y: 0 points (loss) if x = y: 1 point (tie)


function points(games) {
    var sum=0;
    for (var i=0; i<games.length; ++i)
    {
      if (games[i][0]>games[i][2])
        sum+=3;
      if (games[i][0]==games[i][2])
        sum+=1;
    }
    return sum;
  }