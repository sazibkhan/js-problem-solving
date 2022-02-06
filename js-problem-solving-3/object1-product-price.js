const products = [
    { name: "laptop", price: 2000 },
    { name: "shirt", price: 2500 },
    { name: "which", price: 3000 },
    { name: "phone", price: 2500 }
];

let totalPrice = 0;

for (const prod of products) {
    totalPrice = totalPrice + prod.price;

}
console.log(totalPrice);