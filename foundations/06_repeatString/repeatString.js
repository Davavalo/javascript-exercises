const repeatString = function (string, num) {
  if (num < 0) {
    return "ERROR";
  }

  let stringSum = "";

  for (let i = 0; i < num; i++) {
    stringSum += string;
  }

  return stringSum;
};

// Do not edit below this line
module.exports = repeatString;
