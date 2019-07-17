function Queue() {
    this.elements = {};
    this.rear = 0; // or head or end
    this.front = 0; // or tail or beginning
}

/**
 * Add/insert an element at the rear (end of queue).
 */
Queue.prototype.enqueue = function(element) {
    this.elements[this.rear++] = element;
}


/**
 * Delete an element at the front of the queue in O(1) running time
 */
Queue.prototype.dequeue = function(element) {
    if (this.rear === this.front)
        return undefined

    var element = this.elements[this.front];
    delete this.elements[this.front++];
    return element;
}


// Try it out
let queue = new Queue();

queue.dequeue(); // undefined
queue.enqueue(2);
queue.enqueue(4);
queue.enqueue(6);

