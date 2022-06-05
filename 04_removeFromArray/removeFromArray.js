const removeFromArray = function(array, remove) {
    let removeArguments = [];

    for (let i=1; i < arguments.length; i++){
        removeArguments.push(arguments[i])
    }
    
    removeArguments.forEach((argument) => {
        let index = array.indexOf(argument)
        if (index > -1){
            array.splice(index, 1)
        }
    })

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
