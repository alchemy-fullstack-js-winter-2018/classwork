const Q = require('./letterTree');

const rightRotate = node => {
    const newRoot = node.left;
    node.left = null;

    const oldRight = newRoot.right;
    newRoot.right = null;

    newRoot.add(node);
    newRoot.add(oldRight);

    return newRoot;
};

console.log(rightRotate(Q));
