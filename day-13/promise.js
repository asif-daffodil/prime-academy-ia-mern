const wada = false
const afjalPromise = new Promise((res, rej) => {
    setTimeout(() => {
        if (wada) {
            return res("Afjal tar kotha rekheche")
        }
        return rej("Afjal tar kotha rakheni")
    }, 2000)
})

afjalPromise.then(result => {
    console.log(result)
}).catch(err => {
    console.log(err)
})

