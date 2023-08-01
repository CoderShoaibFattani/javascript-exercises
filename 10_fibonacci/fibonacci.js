const fibonacci = function(index) {
    const fibonacciSeries = [1,1];
    if (Number(index) < 0) {
        return "OOPS";
    } else {
        for (let i = 2; i <= Number(index); i++) {
            fibonacciSeries.push(fibonacciSeries[i-2]+fibonacciSeries[i-1]);
        }
        return fibonacciSeries[Number(index)-1];
    }
};

// Do not edit below this line
module.exports = fibonacci;
