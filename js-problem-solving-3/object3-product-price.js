const cart = [
    { name: "pen", price: 3, qty: 20 },
    { name: "headphone", price: 300, qty: 3 },
    { name: "Sound Box", price: 500, qty: 8 },
    { name: "light", price: 200, qty: 10 }
];

let totalPrice = 0;

for (const product of cart) {
    const totalProduct = product.price * product.qty;
    totalPrice = totalPrice + totalProduct;
}
console.log(totalPrice);