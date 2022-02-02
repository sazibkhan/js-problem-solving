// const number = 4;
// const remainder = number % 2;
// console.log(remainder == 0);
const number = 4;
function isEven(number) {
    if (number % 2 == 0) {
        return true;
    }
    return false;
}

const isMyNumberEven = isEven(number);
console.log("Is My Number Even = " + isMyNumberEven);




function isOdd(number) {
    if (number % 2 != 0) {
        return true;
    }
    return false;
}
const isMyNumberOdd = isOdd(number);
console.log("Is My Number Odd = " + isMyNumberOdd);








