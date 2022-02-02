// function largestElement(numbers) {
//     let largest = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         const element = numbers[i];
//         if (element > largest) {
//             largest = element;
//         }
//     }
//     return largest;
// }

// const ages = [2, 5, 89, 6, 87, 80, 90];
// const oldest = largestElement(ages);
// console.log("ldest : " + oldest);


function lowestElement(numbers) {
    let lowest = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i + 1];
        if (element > lowest) {
            lowest = element;
        }
    }
    return lowest;
}

const ages = [20, 5, 89, 6, 87, 80, 90];
const oldest = lowestElement(ages);
console.log("lowest Element : " + oldest);
