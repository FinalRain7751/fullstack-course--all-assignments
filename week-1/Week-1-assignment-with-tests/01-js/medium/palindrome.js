/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  const strModified = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  const length = strModified.length;

  for (let i = 0; i < length; i++) {
    if (i === length - 1 - i) continue;
    if (strModified[i] !== strModified[length - 1 - i]) return false;
  }
  return true;
}

// console.log(isPalindrome("A man a plan a canal Panama"));
// console.log(isPalindrome("Able, was I ere I saw Elba!"));

module.exports = isPalindrome;
