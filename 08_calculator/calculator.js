const add = function(...args) {
  const finalVal = args.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  })
  return Number(finalVal)
};

const subtract = function(...args) {
  const finalVal = args.reduce((previousValue, currentValue) => {
    return previousValue - currentValue;
  })
  return Number(finalVal)
};

const sum = function() {
	
};

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
