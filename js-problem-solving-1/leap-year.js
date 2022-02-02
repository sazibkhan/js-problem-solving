
function isLeapYear(year) {
    if (year % 4 == 0) {
        return true;
    } else {
        return false;
    }
}

const myYear = 2001;
const isMyLeapYear = isLeapYear(myYear);
console.log("is Leap Year= " + isMyLeapYear);


const yourYear = 2000;
const isYourYear = isLeapYear(yourYear);
console.log("is Leap Year= " + isYourYear);