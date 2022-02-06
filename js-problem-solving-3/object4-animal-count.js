function animal_count(miles) {

    const mileOf1to10 = 10
    const mileOf10to20 = 50

    if (miles <= 10) {
        const count = miles * mileOf1to10;
        return count;
    }
    else if (miles <= 20) {
        const firstDenseAnimails = 10 * mileOf1to10;
        const restMiles = miles - 10;
        const mileOf10to20 = restMiles * mileOf10to20;
        const totalMails = mileOf1to10 + mileOf10to20;
        return totalMails;
    }
}

const animals = animal_count(13);
console.log(animals);