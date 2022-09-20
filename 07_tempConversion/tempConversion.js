const ftoc = function(f) {
  let temp = (f - 32 )* (5/9);

  if(temp != 0){
    return parseFloat(temp.toFixed(1))
  }
  return 0;
};

const ctof = function(c) {
  let temp = (c * 9 / 5) + 32;

  if(temp != 0){
    return parseFloat(temp.toFixed(1))
  }
  return 0;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
