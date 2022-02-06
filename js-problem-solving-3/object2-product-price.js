const phones = [
    { name: "samsung s5", price: 2000, camara: 10, storage: 32 },
    { name: "walton m32", price: 15000, camara: 12, storage: 152 },
    { name: "shaomi m3", price: 20000, camara: 8, storage: 250 },
    { name: "oppo a2  ", price: 5000, camara: 7, storage: 402 },
    { name: "nokia s5 ", price: 32000, camara: 32, storage: 32 },
    { name: "htc h815 ", price: 12000, camara: 54, storage: 120 },
];

let cheapest = phones[0];
for (let phone of phones) {
    if (phone.price <= cheapest.price) {
        cheapest = phone;
    }
}
console.log(cheapest);