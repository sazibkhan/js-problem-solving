const first = 450;
const secound = 350;

// if (first > secound) {
//     console.log("Busness Hight Many");
// } else {
//     console.log("Busness Low MAny");
// }

// var num1, num2, num3;
// num1 = 5;
// num2 = 10;
// num3 = 7;
// if (num1 > num2 && num1 > num3) {
//     console.log("Hight Number 1 ");
// } else if (num2 > num3 && num2 > num1) {
//     console.log("Hight Number 2 ");
// } else if (num3 > num1 && num3 > num2) {
//     console.log("Hight Number 3 ");
// }





// function findLargest(first, secound) {
//     if (first > secound) {
//         return first;
//     } else {
//         return secound;
//     }
// }

// const larger = findLargest(80, 90);
// console.log("larger :" + larger);




function findLargest(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num3 && num2 > num1) {
        return num2;
    } else if (num3 > num1 && num3 > num2) {
        return num3;
    } else {
        console.log("Not Number");
    }
}

const learght = findLargest(5, 70, 8);
console.log("learght :" + learght);