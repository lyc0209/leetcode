const throttled = (fn, delay = 100) => {

    let timer = null

    return () => {

        if (timer === null) {
            timer = setTimeout(() => {
                fn()
                timer = null
            }, delay)
        }
    }
}

const fn = () => {
    console.log("123")
}

const thFn = throttled(fn, 500)

thFn()
thFn()
thFn()

setTimeout(() => {
    thFn()
}, 800)