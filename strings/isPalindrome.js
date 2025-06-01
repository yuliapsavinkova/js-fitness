/**
 * Problem: Is Palindrome
 * Check if a string is a palindrome.
 *
 * Input: "racecar"
 * Output: true
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

function isPalindrome(str) {
  let left = 0, right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;
}

// Test
console.log(isPalindrome("racecar")); // true
