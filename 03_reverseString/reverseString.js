const reverseString = function(string) {
    let arr = string.split("");
    let reverseStr = arr.reverse().join("");
    return reverseStr;
};

// Do not edit below this line
module.exports = reverseString;
