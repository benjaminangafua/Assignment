const minutes = document.getElementById("minutes"),
    seconds = document.getElementById("seconds"),
    milliseconds = document.getElementById("milliseconds"),
    restart = document.querySelector(".restart"),
    pause = document.querySelector(".pause"),
    start = document.querySelector(".start");
let timeOut, sec, min, miSec;

miSec = sec = min = 0;

start.addEventListener("click", () => {
    timeOut = setInterval(increment, 10)
        // console.log(miSec)

})

function increment() {
    miSec++
    if (miSec === 100) {
        ++sec
        miSec = 0

        if (sec == 60) {
            ++min
            sec = 0
            miSec = 0
            minutes.innerHTML = min < 10 ? `0${min} : ` : `${min} : `

            if (min == 3) {
                clearTimeout(timeOut)
            }
        }
        seconds.innerHTML = sec < 10 ? `0${sec}  : ` : `${sec} : `

    }
    milliseconds.innerHTML = miSec < 10 ? `0${miSec}` : miSec

}
pause.addEventListener("click", () => {
    clearTimeout(timeOut)

})

restart.addEventListener("click", () => {
    sec = miSec = 0
    minutes.innerHTML = "00 : "
    seconds.innerHTML = "00 : "
    milliseconds.innerHTML = "00"
})