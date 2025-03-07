// sum.js
function sum(a, b) {
  return a + b;
}

module.exports = sum;

// sum.test.js
test('adds 2 + 3 to equal 5', () => {
  expect(sum(2, 3)).toBe(5);
});

// Test for adding -2 + 3
test('adds -2 + 3 to equal 1', () => {
  expect(sum(-2, 3)).toBe(1);
});
