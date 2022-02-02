var student1 = { id: 12, name: "sazib Khan", marks: 85, phone: 1717226385 };

var mobile = {
    color: "block",
    price: 5000,
    size: 500,
    storage: "13gb"
}

var books = {
    title: "Start with Why",
    author: "Kamal Khan",
    page: 246,
    publiser: "penguin",
    price: 500
}
//console.log(books);
//console.log(books.author);
var bookPrice = books.price;
//console.log(bookPrice);


//diffrent waye to set a value of an object property
var priceProperty = "price";

books.price = 50000;
books["price"] = 150000;
books[priceProperty] = 1900;

console.log(books);



for (var i = 1; i <= 10; i++) {

    if (i == 5) {
        break;
    }
    console.log(i);
}



