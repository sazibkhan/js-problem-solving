// var factorial = 1;
// for (var i = 1; i <= 5; i++) {
//     factorial = factorial * i;
//     console.log(i + " * " + factorial + " = " + factorial * i);
// }
// console.log(factorial);



// function factorial(num) {
//     let fact = 1;
//     for (let i = 1; i <= num; i++) {
//         fact = fact * i;
//     }
//     return fact;
// }

// console.log(factorial(5));

function getFacttorial(num) {
    let factorial = 1;
    let i = num;
    while (i >= 1) {
        factorial = factorial * i;
        i--;
    }
    return factorial;
}