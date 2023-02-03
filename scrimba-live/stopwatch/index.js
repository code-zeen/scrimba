const startBtn = document.getElementById("start")
const stopBtn = document.getElementById("stop")
const resetBtn = document.getElementById("reset")

let time = document.getElementById("time")

let total = 0
let ms = 0
let s = 0
let m = 0

let intervalId

function start() {
  intervalId = setInterval(function() {
    total++
    ms = total % 100
    s = Math.floor(total / 100) % 60
    m = Math.floor(total / 6000)
    time.innerText = `${m}:${s}:${ms}`
  }, 10)
}


startBtn.addEventListener("click", () => start())
stopBtn.addEventListener("click", () => clearInterval(intervalId))
resetBtn.addEventListener("click", () => {
  total = 0
  clearInterval(intervalId)
  time.innerText = "00:00:00"
})