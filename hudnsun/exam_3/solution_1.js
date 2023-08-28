/**
 * @param {String} str
 * @param {Number} target
 */
const tenToX = (str, target) => {
    let source = Number(str)
    const resultArr = []
    while (source > 0) {
        const remain = source % target
        if (remain < 10) {
            resultArr.unshift(String(remain))
        } else {
            resultArr.unshift(String.fromCharCode(remain + 87))
        }
        source = Math.floor(source / target)
    }
    return resultArr.join("")
}

/**
 * @param {String} str
 * @param {Number} source
 */
const xToTen= (str, source) => {
    let result = 0
    for (let i = 0; i < str.length; i++) {
        let value = str[i]
        if (value >= "A" && value <= "Z") {
            value = value.charCodeAt(0) - "A".charCodeAt(0)
        } else if (value >= "a" && value <= "z") {
            value = value.charCodeAt(0) - "a".charCodeAt(0)
        }
        result += Number(value) * Math.pow(source, str.length - i - 1)
    }
    return result
}

const solution = () => {
    const str = "829"
    const target = 2
    const flag = 0 // 0: 10转x；1: x转10

    if (!str) {
        return 0
    }
    if (!flag) {
        return tenToX(str, target)
    } else {
        return xToTen(str, target)
    }
}

const result = solution()
console.log(result)