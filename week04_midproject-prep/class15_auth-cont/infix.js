const Plus = require('./tree');

const infix = node => {
    if(!(node.left && node.right)) {
        return node.value;
    }

    const left = infix(node.left);
    const right = infix(node.right);

    return `${left} ${node.value} ${right}`;
};

console.log(infix(Plus));
