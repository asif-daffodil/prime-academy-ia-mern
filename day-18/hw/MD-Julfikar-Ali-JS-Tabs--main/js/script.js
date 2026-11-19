const buttons =document.querySelectorAll(".tab-btn")
const panels = document.querySelectorAll(".tab-panel")

const active = ["border-blue-600", "text-blue-600"]
const inactive = ["border-transparent", "text-gray-500", "hover:text-neutral-700"]

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        buttons.forEach(b => {
            b.classList.remove(...active)
            b.classList.add(...inactive)
        })
        btn.classList.remove(...inactive)
        btn.classList.add(...active)

        panels.forEach(p => {
            p.classList.add("hidden")
            document.getElementById(btn.dataset.tab).classList.remove("hidden")

        })
    })
}) 