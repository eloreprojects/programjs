class Stack {
    constructor() {
        this.elements = [];
    }

    push = (element) => {
        this.elements.push(element);      
    }

    pop = () => {
        this.elements.splice(this.elements.length - 1);
    }

    peek = () => {
        return this.elements[this.elements.length - 1];
    }
}

module.exports = Stack;