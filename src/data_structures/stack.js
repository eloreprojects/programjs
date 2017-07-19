class Stack {
    constructor() {
        this.elements = [];
    }

    push(element) {
        this.elements.push(element);      
    }

    pop() {
        return this.elements.pop();
    }

    peek() {
        return this.elements[this.elements.length - 1];
    }

    length() {
        return this.elements.length;
    }

    print() {
        console.log(this.elements.join(' '));
    }
}

module.exports = Stack;
