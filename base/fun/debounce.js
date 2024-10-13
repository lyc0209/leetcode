const debounce = (fn, delay = 100) => {

    let timer = null

    return () => {

        clearTimeout(timer)

        timer = setTimeout(fn, delay)
    }
}