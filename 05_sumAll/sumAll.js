const sumAll = function(lower,upper) {

    if(typeof(lower) != "number" || typeof(upper) != "number" || lower < 0){
        return "ERROR"
    }

    if(lower > upper){
        let temp = lower;
        lower = upper;
        upper = temp;
    }
    let sum = 0;
    for(lower; lower <= upper;lower++){
        sum += lower;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
