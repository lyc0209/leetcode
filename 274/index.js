/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {

  citations.sort((a, b) => b - a)

  let maxCount = 0
  citations.forEach((item, index) => {
    maxCount = Math.max(Math.min(item, index + 1), maxCount)
  })

  return maxCount
};

/**
 * @desc 计数排序
 * @param {number[]} citations
 * @return {number}
 */
const hIndex2 = (citations) => {
  let result = 0
  const arr = new Array(citations.length + 1).fill(0)
  for (const item of citations) {
    arr[Math.min(item, citations.length)] += 1
  }

  for (let i = citations.length; i >= 0; i--) {
    result += arr[i]
    if (result >= i) {
      return i
    }
  }
  return -1

}

// 至少发表了 h 篇论文，并且 至少 有 h 篇论文被引用次数大于等于 h
const arr = [6,6,4,8,4,3,3,10]

const result = hIndex2(arr)

console.log(result)