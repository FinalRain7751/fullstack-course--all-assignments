/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  const len1 = str1.length;
  const len2 = str2.length;

  if (len1 !== len2) return false;

  const arr1 = createSortedArray(str1, len1);
  console.log(arr1);
  const arr2 = createSortedArray(str2, len1);

  for (let i = 0; i < len1; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;

  function createSortedArray(str, len) {
    let arr = [];
    for (let i = 0; i < len; i++) {
      if (str[i] === " ") continue;
      arr.push(str[i].toLowerCase());
    }
    return arr.sort();
  }
}

module.exports = isAnagram;
