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
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

// Test
console.log(factorial(5)); // 120
