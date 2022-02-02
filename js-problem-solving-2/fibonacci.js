var first = 0;
var secound = 1;
let sum = 0;
console.log(first + " , " + secound);
for (var i = 3; i < 8; i++) {

    var fibo = first + secound;
    first = secound;
    secound = fibo;
    console.log(fibo);

    sum = sum + fibo;
}
console.log("Total SUm :" + sum);