/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuitOld = function(gas, cost) {
    const len = gas.length

    // if (len === 1) {
    //     return 1
    // }

    for (let num = 0; num < len; num++) {
        let isPass = true
        let remainedGas = 0
        for (let i = 0; i < len; i++) {

            let index = num + i
            if (index >= len) {
                index = index - len
            }

            remainedGas += gas[index]
            if (remainedGas < cost[index]) {
                isPass = false
                break
            } else {
                remainedGas -= cost[index]
            }
        }

        if (remainedGas >= 0 && isPass) {
            return num
        }
    }

    return -1
};

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    const len = gas.length

    let num = 0
    while (num < len) {
        let remainedGas = 0
        let count = 0

        for (let i = 0; i < len; i++) {
            const index = (num + i) % len

            remainedGas += gas[index]
            if (remainedGas >= cost[index]) {
                remainedGas -= cost[index]
                count += 1
            } else {
                break
            }
        }
        if (count === len) {
            return num
        } else {
            num = num + count + 1
        }
    }

    return -1
};


const gas = [1,2,3,4,5]
const cost = [3,4,5,1,2]

// const gas = [4]
// const cost = [5]

const res = canCompleteCircuit(gas, cost)

console.log(res)