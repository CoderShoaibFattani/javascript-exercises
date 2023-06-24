const repeatString = function(string, num) {
    let str = "";
    if (num >= 0) {
        for (let i = 1; i <= num; i++) {
            str += string;
        }
    } else {
        str = "ERROR";
    }
    return str;
};

// Do not edit below this line
module.exports = repeatString;
