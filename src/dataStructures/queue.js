/**
 * An implementation of a Queue in Javascript.
 */
module.exports = class Queue {
    /**
     * @constructor
     */
    constructor() {
        this.elements = [];
    }
    /**
     * Add an element to the end of the queue.
     *
     * @param {*} element - the element to be added to the end of the queue
     */
    enqueue(element) {
        this.elements.push(element);
    }
    /**
     * Remove and return the first element (provided the queue is not empty).
     * If the queue is empty, the method will return null.
     *
     * @return {*} null if the queue is empty, otherwise the first element
     */
    dequeue() {
        var peekData = null;
        if (this.elements.length !== 0) {
            peekData = this.elements.shift();
        }
        return peekData;
    }
    /**
     * Return the first element of the queue without removing it (provided
     * the queue is not empty). If it is, then the method will return null.
     *
     * @return {*} null if the queue is empty, otherwise the first element
     */
    peek() {
        var peekData = null;
        if (this.elements.length !== 0) {
            peekData = this.elements[0];
        }
        return peekData;
    }
    /**
     * Will return the number of elements in the queue.
     *
     * @return {Number} the number of elements in the queue
     */
    size() {
        return this.elements.length;
    }
    /**
     * Will return a boolean representing if the queue is empty or not.
     *
     * @return {Boolean} true if the queue is empty, otherwise false
     */
    isEmpty() {
        return (this.elements.length === 0);
    }
    /**
     * Will reset the queue by removing all elements.
     */
    clear() {
        this.elements = [];
    }
    /**
     * Will retrun a string containing all the elements of the stack.
     * 
     * @return {String} containing all the elements in the stack
     */
    toString() {
        return this.elements.join(' ');
    }
    /**
     * Will print the string represetnation of the stack.
     */
    print() {
        console.log(this.toString());
    }
}
