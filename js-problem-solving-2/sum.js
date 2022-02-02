const number = [10, 20, 15, 30, 35, 80, 74, 1];
let sum = 0;
for (let i = 0; i < number.length; i++) {
    const element = number[i];
    //console.log(element);
    sum = sum + element;
}
//console.log("Total Sum =" + sum);



function totalSum(number) {
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        const element = number[i];
        sum = sum + element;
    }
    return sum
}
const total = totalSum([5, 7, 8]);
console.log(" Total Sum : " + total);