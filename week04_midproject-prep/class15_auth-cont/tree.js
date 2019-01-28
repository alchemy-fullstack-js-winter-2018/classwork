const Node = require('./Node');

const Four = new Node({ data: '4' });
const Three = new Node({ data: '3' });
const Multiply = new Node({ data: '*', left: Four, right: Three });

const Two = new Node({ data: '2' });
const Seven = new Node({ data: '7' });
const MultiplyAgain = new Node({ data: '*', left: Two, right: Seven });

const Five = new Node({ data: '5' });
const Subtract = new Node({ data: '-', left: MultiplyAgain, right: Five });

const Plus = new Node({ data: '+', left: Multiply, right: Subtract });

module.exports = Plus;
