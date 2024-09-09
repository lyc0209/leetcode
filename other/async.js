const fn = async () => {
    console.log(1)

    const res = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(2)
        }, 500)
    })

    console.log(res)

    return 3
}

console.log(0)

fn().then((res) => {
    console.log(res)
})

console.log(4)

