const startBtn = document.getElementById("start")
const stopBtn = document.getElementById("stop")
const pauseBtn = document.getElementById("pause")

let time = document.getElementById("time")

let total = 0
let ms = 0
let s = 0
let m = 0

const intervalId = setInterval(start, 100)
// clearInterval(intervalId)

function start() {
  total++
  ms = total
  s = Math.floor(total / 10)
  m = Math.floor(total/ 600)
  time.innerText = `${m}:${s}:${ms}`
}



stopBtn.addEventListener("click", () => clearInterval(intervalId))