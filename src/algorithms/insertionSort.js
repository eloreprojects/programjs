module.exports = (array) => {
    let i, j, current;
    
    for (i = 0; i < array.length; i++) {
        current = array[i];

        for (j = i - 1; array[j] > current && j >= 0; j--) {
            array[j + 1] = array[j];
        }
        
        array[j + 1] = current;
    }

    return array;
};