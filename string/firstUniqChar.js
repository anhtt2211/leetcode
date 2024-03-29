/**
 * @param {string} str
 * @return {number}
 */
// var firstUniqChar = function (str) {
//   const charCount = {};

//   for (let index = 0; index < str.length; index++) {
//     charCount[str[index]] = (charCount[str[index]] || 0) + 1;
//   }

//   for (let index = 0; index < str.length; index++) {
//     if (charCount[str[index]] === 1) {
//       return index;
//     }
//   }

//   return -1;
// };

var firstUniqChar = function (str) {
  const hasMap = new Map();

  for (let index = 0; index < str.length; index++) {
    hasMap.set(str[index], (hasMap.get(str[index]) || 0) + 1);
  }

  for (let index = 0; index < str.length; index++) {
    if (hasMap.get(str[index]) === 1) {
      return index;
    }
  }

  return -1;
};

console.log(firstUniqChar((str = "leetcode")));
console.log(firstUniqChar((str = "loveleetcode")));
console.log(firstUniqChar((str = "aabb")));
