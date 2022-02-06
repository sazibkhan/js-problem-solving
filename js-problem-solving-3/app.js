function productCalculator(mangoQuentity, appleQuentity, bannanaQuentity) {
    const perMango = 20;
    const perApple = 15;
    const parBannana = 10;
    //Calculation
    const totalMangoQuentity = mangoQuentity * perMango;
    const totalAppleQuentity = appleQuentity * perApple;
    const totalBannanaQuentity = bannanaQuentity * parBannana;

    const total = totalMangoQuentity + totalAppleQuentity + totalBannanaQuentity;
    return total;
}

const firstOrder = productCalculator(10, 1, 1);
console.log(firstOrder);