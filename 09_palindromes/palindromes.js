const palindromes = function (str) {
    const processStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reverseStr = processStr.split("").reverse().join("");
    return processStr == reverseStr;
};

// Do not edit below this line
module.exports = palindromes;
