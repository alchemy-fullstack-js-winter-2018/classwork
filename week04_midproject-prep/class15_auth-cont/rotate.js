const Q = require('./letterTree');

const rotate = node => {
    const newRoot = node.left;

    const arm = newRoot.right;
    const oldRoot = node;

    oldRoot.left = arm;
    newRoot.right = oldRoot;

    // newRoot.right = null;
    // newRoot.add(oldRoot);

    return newRoot;
};

console.log(rotate(Q));
