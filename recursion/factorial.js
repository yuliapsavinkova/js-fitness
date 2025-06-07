/**
 * Problem: Factorial
 * Calculate factorial recursively.
 *
 * Input: 5
 * Output: 120
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

function factorial(n) {
  if (n < 0) {
    throw new Error('Factorial is not defined for negative numbers.');
  }
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

// Test
console.log(factorial(5)); // 120
