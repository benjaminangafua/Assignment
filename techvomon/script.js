const cards = document.querySelector(".carts");
const cart_detail = document.querySelector('.cart-detail')
const carts = document.querySelector(".cart-container")
const preBtn = document.querySelector(".left-arr")
const nxtBtn = document.querySelector(".right-arr")

const img = document.querySelector(".slide-img");
const rightArr = document.querySelector(".right-arrow");
const leftArr = document.querySelector(".left-arrow");
let imgIndex = 0;

const imgs = [{
        href: "./img/carts-img/airPods.jpg",
        name: "AirPods",
        price: "$200",
        guarantee: "You have 5 years of guarantee",
        feature: `<ul>
            <li>Noise Cancellation</li> 
            <li>Bluetooth Connection</li> 
            <li>Dual Usage</li> 
            <li>Seris Connection</li> 
            <li>Allows Multiple Accounts</li> 
            <li>Last for 4hrs when fully charged</li> 
        </ul>`

    },
    {
        href: "./img/carts-img/mouse.jpg",
        name: "Mouse",
        price: "$10",
        guarantee: "You have 5 years of guarantee",
        feature: `<ul>
            <li>4km Shoot</li> 
            <li>Bluetooth Connection</li> 
            <li>Night Shoot</li> 
            <li>HD Video</li> 
            <li>Allows Multiple Accounts</li> 
            <li>Last for 4hrs when fully charged</li> 
        </ul>`
    },
    {
        href: "./img/carts-img/iPhoneXr.jpg",
        name: "iPhone Xr",
        price: "$700",
        guarantee: "You have 5 years of guarantee",
        feature: `<ul>
            <li>High Portrait</li> 
            <li>Bluetooth Connection</li> 
            <li>Supports eSIM</li> 
            <li>Siris Connection Offline</li> 
            <li>Face Recognition</li> 
            <li>Last for 4hrs when fully charged</li> 
        </ul>`
    },
    {
        href: "./img/carts-img/watch.jpg",
        name: "Apple Watch",
        price: "$300",
        guarantee: "You have 5 years of guarantee",
        feature: `<ul>
            <li>Answers Call</li> 
            <li>Bluetooth Connection</li> 
            <li>Detail Health Statistics</li> 
            <li>Siris Connection</li> 
            <li>Allows Face Recognition</li> 
            <li>Last for 6hrs when fully charged</li> 
        </ul>`
    },
    {
        href: "./img/carts-img/computers.jpg",
        name: "Computers",
        price: "$2000",
        guarantee: "You have 5 years of guarantee",
        feature: `<ul>
        <li>Clear Audio</li> 
        <li>Bluetooth Connection</li> 
        <li>Dual Usage</li> 
        <li>Siris Connection</li> 
        <li>1080k Resolution</li> 
        <li>Last for 12hrs when fully charged</li> 
    </ul>`
    },
    {
        href: "./img/carts-img/airPods.jpg",
        name: "AirPods",
        price: "$200",
        guarantee: "You have 5 years of guarantee",
        feature: `<ul>
            <li>Noise Cancellation</li> 
            <li>Bluetooth Connection</li> 
            <li>Dual Usage</li> 
            <li>Seris Connection</li> 
            <li>Allows Multiple Accounts</li> 
            <li>Last for 4hrs when fully charged</li> 
        </ul>`

    },
    {
        href: "./img/carts-img/mouse.jpg",
        name: "Mouse",
        price: "$10",
        guarantee: "You have 5 years of guarantee",
        feature: `<ul>
            <li>4km Shoot</li> 
            <li>Bluetooth Connection</li> 
            <li>Night Shoot</li> 
            <li>HD Video</li> 
            <li>Allows Multiple Accounts</li> 
            <li>Last for 4hrs when fully charged</li> 
        </ul>`
    },
];
const icons = [
    { left: "./img/left-arrow.png" },
    { right: "./img/right-arrow.png" }
];


for (let i = 0; i < imgs.length; i++) {
    cards.innerHTML += `
    <div class="cart">
    <img class="cart-thumbnail" name="${imgs[i].name}" src='${imgs[i].href}'>
    <div class="cart-text">
        <h3 class="cart-title truncate">${imgs[i].name}</h3>
        <div class="cart-guarantee">${imgs[i].guarantee}</div>
        <h3 class="cart-price">${imgs[i].price}</h3>
    </div>
    </div>
    `
}


let containerWidth = cards.getBoundingClientRect().width

console.log(containerWidth)
nxtBtn.addEventListener("click", () => {
    cards.scrollLeft += containerWidth;
    console.log(cards.scrollLeft += containerWidth)
})


preBtn.addEventListener("click", () => {

    cards.scrollLeft -= containerWidth
    console.log(cards.scrollLeft -= containerWidth)
})

const cart_thumbnail = [...document.querySelectorAll(".cart-thumbnail")]
cart_thumbnail.forEach((img, i) => {

    console.log(img.name, imgs, cart_detail)
    img.addEventListener("click", (e) => {
        imgs.forEach((item, i) => {
            if (item.name == img.name) {
                cart_detail.innerHTML = `
                <img src="${item.href}" alt="">
            <div class="detail-text">
                <h1 class="title">This a brand new ${item.name}</h1>
                <p class="description">${item.guarantee}</p>
                <h3 class="price-detail">${item.price}.00</h3>
                <div class="addToCart"><button type="submit">Add to Cart</button></div>
                <div class="Looks">
                    <div class="color">Gray</div>
                    <div class="size">4'11</div>
                </div>
            </div>
                `
            }
        })
    })
})










const slideImg = () => img.src = imgs[Math.floor(Math.random() * imgs.length)].href;

slideImg();

setInterval(slideImg, 2000)


console.log("Image");

(() => {
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