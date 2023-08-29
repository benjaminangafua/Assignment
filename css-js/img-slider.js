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
    { href: "./img/benjamin.png" },
    { href: "./img/james.png" },
    { href: "./img/boakai.png" }
];
const icons = [
    { left: "./img/left-arrow.png" },
    { right: "./img/right-arrow.png" }
];
const slideImg = () => img.src = imgs[Math.floor(Math.random() * imgs.length)].href;

slideImg();

setInterval(slideImg, 2000)

const createAttribute = (elem, src) => elem.setAttribute("src", src);

const rightArr = createElement('img');
const leftArr = createElement('img');

console.log("Image");

(() => {
    const div = createElement('div')

    div.setAttribute("class", "arrows")
    createAttribute(rightArr, icons[1].right)
    createAttribute(leftArr, icons[0].left)

    div.append(leftArr, rightArr)
    imgDiv.append(div)
    imgDiv.setAttribute("class", "slider-container")

    /**
     * Click left - to change an image
     *  *If index is greater than 0 
     *  *   *decrement the index
     *  *   *Set the image to the current index
     * Click right - to change an image
     *  *If index is less than image.length - 1
     *  *   *Increment the index
     *  *   *Set the image to the current index
     */
    leftArr.addEventListener("click", () => {
        if (imgIndex > 0) {
            imgIndex--
            img.src = imgs[imgIndex].href
        } else if (imgIndex == 0) {
            imgIndex = imgs.length - 1
            img.src = imgs[imgIndex].href
        }
        console.log("Right")
    });

    rightArr.addEventListener("click", () => {
        imgIndex++
        if (imgIndex < imgs.length) {
            img.src = imgs[imgIndex].href

        } else {
            imgIndex = 0
            img.src = imgs[imgIndex].href
        }
    });
})()