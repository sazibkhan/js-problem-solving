// const fibo = [0, 1];
// for (var i = 2; i <= 10; i++) {
//     fibo[i] = fibo[i - 1] + fibo[i - 2];
// }
// console.log(fibo);





// function fibonancci(num) {
//     const fibo = [0, 1];
//     for (let i = 2; i <= num; i++) {
//         fibo[i] = fibo[i - 1] + fibo[i - 2];
//     }
//     return fibo;
// }
// const fiboSeries = fibonancci(13);
// console.log(fiboSeries);







function fibonancci(num) {
    if (typeof num != "number") {
        return 'Please Give A Number ';
    }
    if (num < 2) {
        return "Please enter positive number getrt then 1";
    }
    const fibo = [0, 1];
    for (let i = 2; i < num; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}
const fiboSeries = fibonancci(-3);
console.log(fiboSeries);