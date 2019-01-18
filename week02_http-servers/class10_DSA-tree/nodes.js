/* eslint-disable */

const D = {
    data: 'D',
    children: []
};

const B = {
    data: 'B',
    children: [D]
};

const C = {
    data: 'C',
    children: []
};

const A = {
    data: 'A',
    children: [B, C]
};

function depthFirst(node, depth = 0) {
    console.log('  '.repeat(depth), node.data);
    node.children.forEach(child => {
        depthFirst(child, depth + 1);
    });
}

depthFirst(A);
