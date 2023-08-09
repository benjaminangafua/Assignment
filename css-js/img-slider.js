const body = document.querySelector("body")
const imgDiv = createElement("div")
const img = createElement("img")
imgDiv.append(img)
body.append(imgDiv)

function createElement(ele) {
    return document.createElement(ele)
}
let imgIndex = 0

const imgs = [
    "./quoters-img/benjamin.png",
    "./quoters-img/james.png",
    "./quoters-img/boakai.png"
]

const slideImg = () => img.src = imgs[Math.floor(Math.random() * imgs.length)]


slideImg()

setInterval(slideImg, 2000)