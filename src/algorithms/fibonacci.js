const fibonacci = (n) => {
    if (n <= 0) return -1;

    let b = 1;
    let c = 0;
    for (i = 0; i < n; i++) {
        let a = b;
        b = c;
        c = a + b;
    }
    return c;
  };
  
  module.exports = fibonacci;
  