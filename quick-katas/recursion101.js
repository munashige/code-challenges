/*
Description:
In this Kata, you will be given two positive integers a and b and your task will be to apply the following operations:

i) If a = 0 or b = 0, return [a,b]. Otherwise, go to step (ii);
ii) If a ≥ 2*b, set a to a - 2*b, and repeat step (i). Otherwise, go to step (iii);
iii) If b ≥ 2*a, set b to b - 2*a, and repeat step (i). Otherwise, return [a,b].
For example, for a = 22 and b = 5: 
solve(22,5) == [0,1] because [22,5] -> [12,5] -> [2,5] -> [2,1] -> [0,1]
solve(100000000000,3) = [4,3]
*/

function solve(a,b) {
    if (!a || !b) {return [a,b]}
    if (a >= 2*b) {return solve(a-2*b, b)}
    if (b >= 2*a) {return solve(a, b-2*a)}    
    return [a,b]
}
