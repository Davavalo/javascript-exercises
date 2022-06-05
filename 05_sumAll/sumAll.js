const sumAll = function(...args) {
    let finalSum = 0;
    let isAnError = false;
    args.sort((a,b) => {return a - b})
    args.forEach((argument) => {
        if (typeof argument !== 'number' || argument < 0){
            return isAnError = true;
        } 
    })
    if (isAnError) {
        return "ERROR"
    } else {
        for (let i = args[0]; i <= args[args.length - 1]; i++){
            finalSum += i
        }
        return finalSum
    }
};

// Do not edit below this line
module.exports = sumAll;
