const dhaka = document.getElementById("dhaka")
dhaka.textContent = "Dhaka is the capital city of Bangladesh"
// dhaka.style.color = "blue"
// dhaka.style.backgroundColor = "lightblue"
dhaka.style.cssText = `
    font-style: italic;
    color: blue;
    background-color: lightblue;
    padding: 10px;
    font-weight: bold;
    width: max-content
`

const narayanganj = document.getElementById("narayanganj")
narayanganj.textContent = "Narayanganj is a beautiful city"
narayanganj.classList.add("abul")

const btn1 = document.getElementById("btn1")
btn1.addEventListener("click", () => {
    narayanganj.classList.toggle("abul")
    narayanganj.classList.toggle("babul")
})

const demra = document.getElementById("demra")
demra.style.cssText = `
    display: flex;
    flex-direction: column;
    gap: 16px;
    border: 1px solid #000;
    padding: 20px;
    align-items: start;
    width: max-content;
    margin: 20px
`

const h1 = document.createElement("h1")
h1.textContent = "This is a heading"
h1.style.cssText = `
    color: blue;
    text-transform: uppercase
`
const p = document.createElement("p")
p.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi impedit dolores eveniet nam nisi aliquid perferendis consequatur, inventore, deserunt esse temporibus quidem autem libero sed. Minima, odio labore? Excepturi, eveniet."
p.style.cssText = `
    font-style: italic;
    letter-spacing: 2px;
    max-width: 300px
`

const btn2 = document.createElement("button")
btn2.textContent = "Read More"
btn2.classList.add("btn")

demra.appendChild(h1)
demra.appendChild(p)
demra.appendChild(btn2)


const link = document.getElementById("link")
link.setAttribute("href", "https://fb.com/abir.upwork")
console.log(link.getAttribute("id"))

console.log(link.dataset.city)