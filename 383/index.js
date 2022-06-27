/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  const map = new Map()
  for (const s of magazine) {
    map.set(s, (map.get(s) || 0) + 1)
  }
  for (const s of ransomNote) {
    if (map.get(s) && map.get(s) > 0) {
      map.set(s, map.get(s) - 1)
    } else {
      return false
    }
  }
  return true
};

const result = canConstruct('aa', 'aab')
console.log(result)