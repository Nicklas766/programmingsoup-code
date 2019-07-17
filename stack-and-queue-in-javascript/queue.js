function Queue() {
    this.elements = [];
}

/**
 * Add/insert an element at the rear (end of queue).
 */
Queue.prototype.enqueue = function(element) {
    this.elements.push(element)
}


/**
 * Delete an element at the front of the queue in O(n) running time
 */
Queue.prototype.dequeue = function(element) {
    return this.elements.shift()
}

// Try it out
let queue = new Queue();

queue.dequeue(); // undefined
queue.enqueue(2);
queue.enqueue(4);
queue.enqueue(6);
