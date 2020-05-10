const { Queue } = require('./dsa.queue')

class BinarySearchTree {
    constructor(key = null, value = null, parent = null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null;
    }

    dfs(values=[]) {
        if (this.left) {
            values = this.left.dfs(values);
        }
        values.push(this.value);

        if (this.right) {
            values = this.right.dfs(values);
        }
        return values;
    }

    bfs(tree, values = []) {
        const queue = new Queue(); // Assuming a Queue is implemented (refer to previous lesson on Queue)
        const node = tree.root;
        queue.enqueue(node);
        while (queue.length) {
            const node = queue.dequeue(); //remove from the queue
            values.push(node.value); // add that value from the queue to an array

            if (node.left) {
                queue.enqueue(node.left); //add left child to the queue
            }

            if (node.right) {
                queue.enqueue(node.right); // add right child to the queue
            }
        }
        return values;
    }
    
    inOrder(values = []) {
        if(this.left) {
            values = this.left.inOrder(values)
        }
        values.push(this.value)
        if(this.right) {
            values = this.right.inOrder(values)
        }
        return values
    }

    preOrder(values = []) {
        values.push(this.value)
        if(this.left){
            values = this.left.preOrder(values)
        }
        if(this.right){
            values = this.right.preOrder(values)
        }
        return values
    }

    postOrder(values = []) {
        if(this.left){
            values = this.left.postOrder(values)
        }
        if(this.right){
            values = this.right.postOrder(values)
        }
        values.push(this.value)
        return values
    }
}