function maxNumber(numbers) {
    let max = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > max) {
            max = element;
        }
    }
    return max;
}

function minNumber(numbers) {
    let min = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element < min) {
            min = element;
        }
    }
    return min;
}

let numbers = [2, 5, 89, 6, 87, 80, 90];
let maxNum = maxNumber(numbers);
console.log("Max Number : " + maxNum);

let output = minNumber(numbers);
console.log("Min Number : " + output);



