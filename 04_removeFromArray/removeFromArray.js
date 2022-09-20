const removeFromArray = function(arr,...numbers) {
    let newArr = arr.filter((element) =>{
        return !(numbers.includes(element));
    })
    return newArr;

};

// Do not edit below this line
module.exports = removeFromArray;
