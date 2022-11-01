const repeatString = function(repStr, count) {
    if (count == 0){
        return '';
    }
    if (count < 0){
        return 'ERROR';
    }
    retString = '';
    while(count > 0){
        retString += repStr;
        count--;
    }
    return retString;
};

// Do not edit below this line
module.exports = repeatString;
