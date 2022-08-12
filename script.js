const BODY = document.querySelector("body")

/**Create HTML element */
let container = document.createElement("div")
let timer = document.createElement("div")


/**Set Attribute */
container.setAttribute("class", "container")
timer.setAttribute("class", "timer")

/**Writing to HTML content */
timer.innerHTML = "12:34"


/**Append HTML elements */
BODY.append(container)
container.append(timer)

/**Styling content */
container.style = `
margin: 20%;
`
console.log(setTimeout(get(),5000))
function get(){
    for(let i = 0; i< 5; i++)
        console.log(i)
}