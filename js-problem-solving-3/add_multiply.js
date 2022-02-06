function add(num1, num2) {
    console.log("Paramiter :" + num1 + " + " + num2);
    const sum = num1 + num2;
    return sum;
}

function minaz(num1, num2) {
    console.log("Paramiter :" + num1 + " - " + num2);
    const minaz = num1 - num2;
    return minaz;
}

function mantiply(num1, num2) {
    console.log("Paramiter :" + num1 + " * " + num2);
    const malt = num1 * num2;
    return malt;
}
function devid(num1, num2) {
    console.log("Paramiter :" + num1 + " / " + num2);
    const dive = num1 / num2;
    return dive;
}


const totalSum = add(80, 70);
console.log("Total Sum " + totalSum);

const totalMinaz = minaz(80, 70);
console.log("Total minaz " + totalMinaz);

const totalMalt = mantiply(800, 70);
console.log("Total Maltoly :" + totalMalt);

const totalDiv = devid(10, 2);
console.log("Total Div :" + totalDiv);

