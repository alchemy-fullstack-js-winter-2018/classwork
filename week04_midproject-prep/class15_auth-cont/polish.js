const Plus = require('./tree');

const polish = node => {
    // De Morgan's Law
    // (!x || !y) is the same as
    // !(x && y)
    // Similarly:
    // (!x && !y)  is the same as
    // !(x || y)

    if(!(node.left && node.right)) {
        return node.value;
    }

    const left = polish(node.left);
    const right = polish(node.right);

    return `${left} ${right} ${node.value}`;
};

console.log(polish(Plus));
