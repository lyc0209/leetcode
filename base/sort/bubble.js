/**
 * @param {Array} arr
 */
const solution = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length - i; j++) {
            if (arr[j - 1] > arr[j]) {
                const temp = arr[j - 1]
                arr[j - 1] = arr[j]
                arr[j] = temp
            }
        }
    }
}

const arr = [5, 3, 8, 10, 2, 50]

solution(arr)

console.log(arr)