/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    if (s.length === 0) {
        return true
    }

    const dp = new Array(s.length + 1).fill(false)
    dp[0] = true

    for (let i = 1; i <= s.length; i ++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordDict.find((item) => item === s.substring(j, i))) {
                dp[i] = true
                break
            }
        }
    }

    return dp[dp.length - 1]
};

const s = "leetcode"
const wordDict = ["leet", "code"]

const res = wordBreak(s, wordDict)

console.log(res)