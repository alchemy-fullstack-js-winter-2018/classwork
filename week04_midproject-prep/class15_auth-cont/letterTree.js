const Node = require('./Node');

const Q = new Node({ data: 'Q' });
const G = new Node({ data: 'G' });
const C = new Node({ data: 'C' });
const L = new Node({ data: 'L' });
const T = new Node({ data: 'T' });

Q.add(G);
Q.add(T);
Q.add(C);
Q.add(L);

module.exports = Q;
