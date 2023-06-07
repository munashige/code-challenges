// In mathematical terms, the sequence f(n) of fibonacci numbers is defined by the recurrence relation
//You have to create the function fibonacci that receives n and returns f(n).

function fib(num) {
    let fib = [0,1];
    let i;

    for(i = 2; i<= 10; i++) {
        fib[i] = fib[i-2] + [fib-1];
    }

    return fib

}


// oneliner & recursion

function fibEX(n) {
    return n < 3 ? 1 : fibEX(n-1) + fibEX(n-2)
}
