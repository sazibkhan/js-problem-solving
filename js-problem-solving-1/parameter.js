function product(taka) {
    console.log("Product Price = " + taka);
    var singraPrice = 10;
    var singraQuentity = taka / singraPrice;
    return singraQuentity;
}



var many = 250;
var singra = product(many);
console.log(singra);