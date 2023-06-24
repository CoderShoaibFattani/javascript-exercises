const convertToCelsius = function(temp) {
  let tempInCelsius = ((temp - 32) * (5/9));
  if (tempInCelsius % 1 == 0) {
    return tempInCelsius;
  } else {
    return Number(tempInCelsius.toFixed(1));
  }
};

const convertToFahrenheit = function(temp) {
  let tempInFahrenheit = (temp * (9/5) + 32);
  if (tempInFahrenheit % 1 == 0) {
    return tempInFahrenheit;
  } else {
    return Number(tempInFahrenheit.toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
