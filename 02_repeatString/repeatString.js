const repeatString = function(word="hey",times=0) {
    if(times === 0){
        return "";
    }else if(times < 0){
        return "ERROR";
    }
    return word.repeat(times);
};

// Do not edit below this line
module.exports = repeatString;
