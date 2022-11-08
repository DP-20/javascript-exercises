const leapYears = function(leapYear) {
    //check if the leap Year is divisible by 100 and 400
    if(leapYear % 100 == 0 && leapYear % 400 == 0){
        return true;
    }

    //check if leap year is divisible by 4 and not 100
    if(leapYear % 4 == 0 && leapYear % 100 != 0){
        return true;
    }

    // if neither of the above are true then just return false
    return false;
};

// Do not edit below this line
module.exports = leapYears;
