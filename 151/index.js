/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  return s.trim().split(" ").filter((item) => item !== "").reverse().join(" ")
};

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords2 = function(s) {
  const removeSpace = (s) => {
    const charArr = s.split("")
    // charArr.splice(3, 1)
    for (let i = 0; i < charArr.length; i++) {
      if (charArr[i] !== " ") {
        continue
      }
      let j = i + 1
      while (j < charArr.length && charArr[j] === " ") {
        j++
      }
      if (j - i > 1) {
        charArr.splice(i + 1, j - i - 1)
      }
      // i = j
    }
    if (charArr[0] === " ") {
      charArr.shift()
    }
    if (charArr[charArr.length - 1] === " ") {
      charArr.pop()
    }
    return charArr
  }
  const reverseArr = (arr = []) => {
    for (let i = 0; i < arr.length / 2; i++) {
      const tmp = arr[i]
      arr[i] = arr[arr.length - i - 1]
      arr[arr.length - i - 1] = tmp
    }
    return arr
  }
  const reverseWord = (arr = []) => {
    for(let i = 0; i < arr.length; i++) {
      if (charArr[i] === " ") {
        continue
      }
      let j = i + 1;
      while (j < charArr.length && charArr[j] !== " ") {
        j++
      }
      const len = j - i
      for (let x = i; x - i < len / 2; x++) {
        const tmp = arr[x]
        arr[x] = arr[j - x - 1 + i]
        arr[j - x - 1 + i] = tmp
      }
      i = j
    }
  }
  charArr  = removeSpace(s)
  reverseArr(charArr)
  reverseWord(charArr)

  return charArr.join("")
};

const result = reverseWords2("  is a good   day  ")
console.log(result)