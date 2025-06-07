/**
 * Problem: Is Palindrome
 * Check if a string is a palindrome.
 *
 * Input: "madam"
 * Output: true
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

function isPalindrome(str) {
  let left = 0,
    right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;
}

function isPalindrome2(str) {
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const reversedStr = cleanedStr.split('').reverse().join('');
  return cleanedStr === reversedStr;
}

// Test
console.log(isPalindrome('madam')); // true
