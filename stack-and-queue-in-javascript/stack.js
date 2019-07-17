function Stack() {
    this.elements = [];
}

/**
 * Add the element on top
 */
Stack.prototype.push = function(element) {
    this.elements.push(element)
}

/**
 * Remove the top element
 */
Stack.prototype.pop = function() {
    return this.elements.pop()
}
/**
 * Return the top element without removing it
 */
Stack.prototype.peek = function() {
    return this.elements[this.elements.length - 1];
}

/**
 * Return the size
 */
Stack.prototype.getSize = function() {
    return this.elements.length;
}

// Try it out
let stack = new Stack()

stack.push(5)
stack.peek()
stack.push(10)

stack.peek()
stack.pop()