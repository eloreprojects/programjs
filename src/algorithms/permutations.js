const factorial = require('./factorial');

module.exports = (n, r) => {
    if (!(n >= r > 0)) {
        return -1;
    }
    return (factorial(n) / factorial(n - r));
};