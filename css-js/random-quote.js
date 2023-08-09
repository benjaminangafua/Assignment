const quote = document.getElementById("text")
const quote_author = document.getElementById("author")
const quote_img = document.getElementById("author-img")
const generate = document.getElementById("generate-quote")

const quotations = [{
        id: 1,
        quote: '“The problem with the Internet startup craze isn’t that too many people are starting companies; it’s that too many people aren’t sticking with it.” ',
        author: {
            name: "Steve Jobs",
            img: "./quoters-img/benjamin.png",

        }
    }, {
        id: 2,
        quote: '“Sometimes when you innovate, you make mistakes. It is best to admit them quickly, and get on with improving your other innovations.”',
        author: {
            name: "Steve Jobs",
            img: "./quoters-img/benjamin.png",

        }
    }, {
        id: 3,
        quote: ' “Our belief was that if we kept putting great products in front of customers, they would continue to open their wallets.”',
        author: {
            name: "Steve Jobs",
            img: "./quoters-img/benjamin.png",

        }
    },
    {
        id: 4,
        quote: '“Innovation has nothing to do with how many R&D dollars you have. It’s about the people you have, how you’re led, and how much you get it.” ',
        author: {
            name: "Steve Jobs",
            img: "./quoters-img/benjamin.png",

        }
    }, {
        id: 5,
        quote: '“The problem with the Internet startup craze isn’t that too many people are starting companies; it’s that too many people aren’t sticking with it.” ',
        author: {
            name: "Steve Jobs",
            img: "./quoters-img/benjamin.png",

        }
    }, {
        id: 6,
        quote: ' “Stay hungry, stay foolish.” ',
        author: {
            name: "Steve Jobs",
            img: "./quoters-img/benjamin.png",

        }
    }, {
        id: 7,
        quote: '“That’s been one of my mantras — focus and simplicity. Simple can be harder than complex: You have to work hard to get your thinking clean to make it simple. But it’s worth it in the end because once you get there, you can move mountains.”',
        author: {
            name: "Steve Jobs",
            img: "./quoters-img/benjamin.png",

        }
    }, {
        id: 8,
        quote: 'Be a yardstick of quality.',
        author: {
            name: "Steve Jobs",
            img: "./quoters-img/benjamin.png",

        }
    }, {
        id: 9,
        quote: '“We all need people who will give us feedback. That’s how we improve.”',
        author: {
            name: "Bill Gates",
            img: "./quoters-img/boakai.png",

        }
    }, {
        id: 10,
        quote: '“Patience is a key element of success.”',
        author: {
            name: "Bill Gates",
            img: "./quoters-img/boakai.png",

        }
    }, {
        id: 11,
        quote: '“Television is not real life. In real life, people actually have to leave the coffee shop and go to jobs.”',
        author: {
            name: "Bill Gates",
            img: "./quoters-img/boakai.png",

        }
    }, {
        id: 12,
        quote: '“It’s fine to celebrate success, but it is more important to heed the lessons of failure.”',
        author: {
            name: "Bill Gates",
            img: "./quoters-img/boakai.png",

        }
    }, {
        id: 13,
        quote: ' "If you are born poor it’s not your mistake, but if you die poor it’s your mistake" ',
        author: {
            name: "Bill Gates",
            img: "./quoters-img/boakai.png",

        }
    }, {
        id: 14,
        quote: '“If you’re not stubborn, you’ll give up on experiments too soon.”',
        author: {
            name: "Jeff Bezos",
            img: "./quoters-img/james.png",

        }
    }, {
        id: 15,
        quote: '“If you never want to be criticized, for goodness’ sake don’t do anything new.”',
        author: {
            name: "Jeff Bezos",
            img: "./quoters-img/james.png",

        }
    }, {
        id: 16,
        quote: '“In the old world, you devoted 30% of your time to building a great service and 70% of your time to shouting about it. In the new world, that inverts.”',
        author: {
            name: "Jeff Bezos",
            img: "./quoters-img/james.png",

        }
    }, {
        id: 17,
        quote: '“Life’s too short to hang out with people who aren’t resourceful.”',
        author: {
            name: "Jeff Bezos",
            img: "./quoters-img/james.png",

        }
    }
];


function displayQuote() {
    const random = Math.floor(Math.random() * quotations.length)
    const quote_data = quotations[random]
    quote_img.src = quote_data.author.img
    quote.innerHTML = quote_data.quote
    quote_author.innerHTML = quote_data.author.name
}
displayQuote()
setInterval(displayQuote, 5000)

generate.addEventListener("click", displayQuote)