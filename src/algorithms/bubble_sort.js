module.exports = function(array) {
    let flag = true;

    while (flag) {
        flag = false;

        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                const temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
            }
        }
    }

    return array;
};