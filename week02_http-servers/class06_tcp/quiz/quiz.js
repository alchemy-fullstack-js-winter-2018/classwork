module.exports = words => {
  return words
    .filter(word => !word.toLowerCase().includes('y'))
    .map(word => `Is it ${word}?`);
};
