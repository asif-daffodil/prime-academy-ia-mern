const afjal = document.getElementById("afjal")
afjal.innerHTML = "<b>Afjal</b> is not a bad boy!"

document.getElementsByClassName("yeasin")[0].innerText = "Yeasin is a good boy!"

document.getElementsByTagName("div")[2].textContent = "Sakib is an international player!"

/*
    document.querySelector("#afjal")
    document.querySelector(".afjal")
    document.querySelector("afjal")
    document.querySelectorAll(".afjal")[0]
    document.querySelectorAll("afjal")[0]
*/

const ca = document.getElementById("ca")
ca.addEventListener("click", () => {
    alert("ha ha ha ha ha ha")
})

const julfikarDiv = document.getElementById("julfikarDiv")
const julfikarBtn = document.getElementById("julfikarBtn")

julfikarBtn.addEventListener("click", () => {
    julfikarDiv.textContent = "Julfikar is a good boy!"
})

julfikarDiv.addEventListener("mouseover", () => {
    julfikarDiv.textContent = "Julfikar is not a bad boy!"
})

const onBtn = document.getElementById("onBtn")
const offBtn = document.getElementById("offBtn")
const lightImg = document.getElementById("lightImg")

onBtn.addEventListener("click", () => {
    lightImg.src = "./images/pic_bulbon.gif"
})

offBtn.addEventListener("click", () => {
    lightImg.src = "./images/pic_bulboff.gif"
})

const ctText = document.getElementById("ctText")
const ctBtn = document.getElementById("ctBtn")

ctBtn.addEventListener("click", () => {
    if(ctText.textContent.trim() == "Bangladesh") {
        ctText.textContent = "Dhaka"
    }else{
        ctText.textContent = "Bangladesh"
    }
})