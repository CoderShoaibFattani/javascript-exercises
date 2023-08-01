const add = function(val1, val2) {
return val1 + val2;
};

const subtract = function(val1, val2) {
	return val1 - val2;
};

const sum = function(arr) {
	let sum = 0;
  if (arr.length === 0) {
    return sum;
  }
  else {
    let total = arr.reduce((sum, el) => sum + el);
    return total;
  }
};

const multiply = function(...arg) {
  let multiplier = 1;
  let result = arg.reduce((multiplier,el) => multiplier * el);
  return result;
};

const power = function(base, power) {
	return base ** power;
};

const factorial = function(num) {
	let result = 1;
  if (num === 0 || num === 1) {
    return result;
  } else {
    for (let i = num; i >= 1; i--) {
      result *= i;
    }
    return result;
  }
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
