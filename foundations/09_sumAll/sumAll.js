const sumAll = function (startingValue, endingValue) {
  const arrayOfValues = [];

  if (startingValue < 0 || endingValue < 0) {
    return "ERROR";
  }

  if (startingValue % 1 !== 0 || endingValue % 1 !== 0) {
    return "ERROR";
  }

  if (typeof startingValue === "string" || typeof endingValue === "string") {
    return "ERROR";
  }

  if (startingValue > endingValue) {
    for (let i = endingValue; i < startingValue + 1; i++) {
      arrayOfValues.push(i);
    }
  } else {
    for (let i = startingValue; i < endingValue + 1; i++) {
      arrayOfValues.push(i);
    }
  }

  return arrayOfValues.reduce((total, value) => total + value);
};

// Do not edit below this line
module.exports = sumAll;
