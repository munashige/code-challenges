/*You will be given a number and you will need to return it as a string in Expanded Form, e.g:
expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
*/

function expandedForm(num) {
    return num
     .toString()
     .split("")
     .reverse()
     .map((a,b) => a* Math.pow(10,b))
     .filter(c=> c>0)
     .reverse()
     .join(" + ") 
   }
   