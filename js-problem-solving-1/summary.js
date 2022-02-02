var phones = ["iPhone", "Samploy", "lg", "wolton"];

phones[2] = "samsum";
//console.log(phones);

if (phones.indexOf("lg") == -1) {
    console.log("The phone is Missing ");
} else {
    console.log("This is Avable phone ");
}



const state = {

    cartItems: [{ product: 1, name: 'pen', price: 20, qty: 1 },
    { product: 2, name: 'book', price: 15, qty: 1 }]
}


var nums = [4, 5, 7, 6, 8, 2, 4, 1, 15];
console.log(nums[6]);

var smartphone = { brand: "iPhone", model: "13" };
//console.log(smartphone.brand);
//console.log(smartphone["brand"]);



function getReminder(number1, number2) {
    number1 % number2;
}
const reminder = getReminder(12, 26);

console.log(reminder);


function addNumber(number1, number2) {
    return "Result is " + number1 + number2;
}

var result = addNumber(5, 4);
console.log(result);