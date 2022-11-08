const sumAll = function(numA, numB) {
    if(numA < 0 || numB < 0){
        return "ERROR";
    }

    if(typeof(numA) != "number" || typeof(numB) != "number"){
        return "ERROR"
    }
    let sum = 0;
    let max = 0;
    let min = 0;

    // get max Number
    if(numB > numA){
        max = numB;
        min = numA;
    }
    else{
        max = numA;
        min = numB;

    }

    while(max > min-1){
        sum = sum + max;
        max--;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
