/**
 * @param arr {Array}
 * @param start {Number}
 * @param end {Number}
 */
const solution = (arr, start, end) => {
    if (start < end) {
        const middle = partition(arr, start, end)
        solution(arr, start, middle - 1)
        solution(arr, middle + 1, end)
    }
}

/**
 * @param arr {Array}
 * @param start {Number}
 * @param end {Number}
 */
const partition = (arr, start, end) => {
    const target = arr[start]

    while (start < end) {
        while (start < end && arr[end] >= target) {
            end -= 1
        }
        arr[start] = arr[end]
        while (start < end && arr[start] <= target) {
            start += 1
        }
        arr[end] = arr[start]
    }
    arr[start] = target
    return start
}

const arr = [5, 3, 8, 10, 2, 50]

solution(arr, 0, arr.length - 1)

console.log(arr)