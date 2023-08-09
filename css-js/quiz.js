const prevBtn = document.getElementById("prev")
const nxtBtn = document.getElementById("nxt")
const q_number = document.getElementById("q-num")
const text = document.getElementById("txt")
const options = document.getElementById("opts")
const range = document.getElementById("range")

// Questions store
const questionsDB = [{
    text: "Which attribute is used to specify the location of an extended CSS file?",
    options: ["href", "src", "class", "style"],
    answer: "href"
}, {
    text: "Which tag is used to define an HTML link?",
    options: ["link tag", "a tag", "href tag", "url tag"],
    answer: "a tag"
}, {
    text: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "High Technical markup Language", "Home Tool markup Language", "Hyperlink and Text Markup Language"],
    answer: "Hyper Text Markup Language"
}];
// Initialize current question index
let qIndex = 0;


//Display current question
function displayQuestion() {
    const currentQuestion = questionsDB[qIndex];
    const newIndex = qIndex + 1
    q_number.innerHTML = newIndex
    range.value = newIndex
    range.max = questionsDB.length

    const hr = `${(Number(range.value) * 100) / Number(range.max)}%`
    const bg = `linear-gradient(90deg, rgb(182, 131, 21) ${hr}, rgba(240, 178, 7, 0.342) ${hr})`

    range.style.background = bg
    console.log(range)
    text.innerHTML = currentQuestion.text;
    displayOptions(currentQuestion)
}

// Display options
function displayOptions(currentQuestion) {

    let opts = "";
    for (let i = 0; i < currentQuestion.options.length; i++) {
        opts += `<li onclick="validateAns(event)">${currentQuestion.options[i]}</li>`
        options.innerHTML = `<ol type="a">${opts}</ol>`
    }
}

// Validate answer
function validateAns(e) {
    const currentQuestion = questionsDB[qIndex]
    if (e.target.innerHTML == currentQuestion.answer) {
        e.target.style.background = "Green"
        e.target.style.color = "#fff"
    } else {
        e.target.style.background = "red";
        e.target.style.color = "#fff"
        let list = document.querySelectorAll("li")

        for (let i = 0; i < list.length; i++) {
            if (list[i].innerHTML == currentQuestion.answer) {
                list[i].style.backgroundColor = "Green"
                list[i].style.color = "#fff"
            }
        }
    }

    setTimeout(next, 2000)
}

// Previous button
const previousQuestion = () => {
    previous()
}

// Previous function
function previous() {

    if (qIndex > 0) {
        qIndex--;
        displayQuestion();
        nxtBtn.style.background = "#eee"
    }
    if (qIndex <= 0) {
        prevBtn.style.background = "gray"
    }
}


//Next button
const nextQuestion = function() {
    next()
}

// Next function
function next() {

    if (qIndex < questionsDB.length - 1) {
        qIndex++;
        displayQuestion();
        prevBtn.style.background = "#eee"
    }
    if (qIndex == questionsDB.length - 1) {
        nxtBtn.style.background = "gray"
        alert(qIndex + " " + questionsDB.length)
    }
}


if (qIndex <= 0) {
    prevBtn.style.background = "gray"
}
displayQuestion();