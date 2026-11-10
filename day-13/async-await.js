const julfukarWada = new Promise((resolve) => {
    setTimeout(() => {
        resolve(true)
    }, 2000)
})

const showMsg = async () => {
    const jw = await julfukarWada
    if (jw) {
        console.log("Julfikar tar kotha rekheche")
        return
    }
    console.log("Julfikar tar kotha rakheni")
}

showMsg()