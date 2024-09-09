function isSubsequence(s: string, t: string): boolean {
    let ptrS = 0
    let ptrT = 0

    let findCount = 0

    for (; ptrS < s.length; ptrS++) {
        while (ptrT < t.length) {
            if (s[ptrS] === t[ptrT]) {
                ptrT += 1
                findCount += 1
                break
            } else {
                ptrT += 1
            }
        }
    }

    return findCount === s.length
}

const s = "axc"
const t = "ahbgdc"

const res = isSubsequence(s, t)

console.log(res)