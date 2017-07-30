const factorial = require('./factorial');

module.exports = (n, r) => {
    if (r < n) {
        return -1;
    }
    return (factorial(n) / (factorial(r) * factorial(n - r)));
};