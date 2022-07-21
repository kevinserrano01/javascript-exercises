const leapYears = function(year) {

    return year % 4 === 0 && ( year % 100 !== 0 || year % 400 === 0);

    //otra forma de hacerlo pero me da error en algunas pruebas
    // if (year%4 === 0) {
    //     return true

    // } else if (year%100 !== 0 || year%400 === 0) {
    //     return false
    // }
};

// Do not edit below this line
module.exports = leapYears;
