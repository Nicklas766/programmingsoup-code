/**
 * Our Node object
 */
function Node (data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

const shouldGoLeft = (newNodeValue, oldNodeValue) => newNodeValue < oldNodeValue;
const shouldGoRight = (newNodeValue, oldNodeValue) => newNodeValue > oldNodeValue;

// Our insert method will not allow duplicates
Node.prototype.insert = function (value) {

    if (value === this.data)
        return false;

    if (shouldGoLeft(value, this.data)) {
        if (this.left === null) {
            this.left = new Node(value)
            return true;
        } 
        this.left.insert(value);
    } 

    if (shouldGoRight(value, this.data)) {
        if (this.right === null) {
            this.right = new Node(value)
            return true;
        } 
        this.right.insert(value);
    }
}

Node.prototype.contains = function (value) {
    if (value === this.data) {
        return true
    }

    if (shouldGoLeft(value, this.data)) {
        if (this.left === null) {
            return false
        } 
        return this.left.contains(value);
    } 

    if (shouldGoRight(value, this.data)) {
        if (this.right === null) {
            return false
        } 
        return this.right.contains(value);
    }
}


Node.prototype.printPreOrder = function () {

    console.log(this.data);

    if (this.left !== null) {
        this.left.printPreOrder();
    }

    if (this.right !== null) {
        this.right.printPreOrder();
    }
}

Node.prototype.printPostOrder = function () {

    if (this.left !== null) {
        this.left.printPostOrder();
    }

    if (this.right !== null) {
        this.right.printPostOrder();
    }

    console.log(this.data);
}

Node.prototype.printInOrder = function () {

    if (this.left !== null) {
        this.left.printInOrder();
    }

    console.log(this.data);        

    if (this.right !== null) {
        this.right.printInOrder();
    }
}


Node.prototype.findMin = function () {
    if (this.left === null)
        return this.data;

    return this.left.findMin();
}


/**
 * Our Binary Search Tree object
 */
function BinarySearchTree () {
    this.root = null;
}

BinarySearchTree.prototype.insert = function (value) {
    if (this.root === null)
        this.root = new Node(value);
    else
        this.root.insert(value);
}

BinarySearchTree.prototype.contains = function (value) {
    if (this.root !== null)
        return this.root.contains(value)
}

BinarySearchTree.prototype.printInOrder = function () {
    if (this.root !== null)
        return this.root.printInOrder()
}

BinarySearchTree.prototype.printPreOrder = function () {
    if (this.root !== null)
        return this.root.printPreOrder()
}

BinarySearchTree.prototype.printPostOrder = function () {
    if (this.root !== null)
        return this.root.printPostOrder()
}

BinarySearchTree.prototype.remove = function (value) {
    if (this.root !== null)
        this.removeNode(value, this.root)
}

BinarySearchTree.prototype.removeNode = function (value, node) {

    if (node === null) {
        return value
    }

    if (value < node.data) {
        node.left = this.removeNode(value, node.left)
    }

    else if (value > node.data) {
        node.right = this.removeNode(value, node.right)
    }

    else if (node.left !== null && node.right !== null) {
        node.data = node.right.findMin();
        node.right = this.removeNode(node.data, node.right)
    }
    else {
        node = (node.left !== null) ? node.left : node.right;
    }
    return node;
}


// Try it out
const bst = new BinarySearchTree()

bst.insert(4)
bst.insert(1)
bst.insert(3)
bst.insert(7)
bst.insert(10)
bst.insert(5)
bst.insert(6)

bst.printInOrder() // 1, 3, 4, 5, 6, 7, 10
bst.printPostOrder() // 3, 1, 6, 5, 10, 7, 4
bst.printPreOrder() // 4, 1, 3, 7, 5, 6, 10