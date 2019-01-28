class Node {
    constructor({ left, right, data }) {
        this.value = data;
        this.left = left;
        this.right = right;
    }

    add(node) {
        if(node.value < this.value) {
            if(!this.left) {
                this.left = node;
            } else {
                this.left.add(node);
            }
        } else {
            if(!this.right) {
                this.right = node;
            } else {
                this.right.add(node);
            }
        }
    }
}

module.exports = Node;
