const body = document.querySelector("body")
const input = document.getElementById("input-el")
const errorEl = document.getElementById("error-el")
const inputBtn = document.getElementById("input-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")
const darkBtn = document.getElementById("dark-btn")

function mToFt(num) {
  return (num * 3.281).toFixed(3)
}

function ftToM(num) {
  return (num / 3.281).toFixed(3)
}

function lToGal(num) {
  return (num * 0.264).toFixed(3)
}

function galToL(num) {
  return (num / 0.264).toFixed(3)
}

function kgToLbs(num) {
  return (num * 2.204).toFixed(3)
}

function lbsToKg(num) {
  return (num / 2.204).toFixed(3)
}

let lengthTxt = ""
let volumeTxt = ""
let maxxTxt = ""

function convert() {
  lengthTxt = `
    ${input.value} m = <b>${mToFt(input.value)} ft</b> | ${input.value} ft = <b>${ftToM(input.value)} m</b>
  `
  volumeTxt = `
    ${input.value} L = <b>${lToGal(input.value)} gal</b> | ${input.value} gal = <b>${galToL(input.value)} L</b>
  `
  massTxt = `
    ${input.value} kg = <b>${kgToLbs(input.value)} lbs</b> | ${input.value} lbs = <b>${lbsToKg(input.value)} kg</b>
  `

  if (isNaN(input.value)) {         // not a number
    errorEl.textContent = "숫자만 변환 가능합니다."
  } else if (input.value === "") {  // empty
    errorEl.textContent = "숫자를 입력해주세요."
  } else if (input.value.trim().length === 0) {
    errorEl.textContent = "입력란을 확인해주세요."
  } else {
    errorEl.innerHTML = "&nbsp;"
    render()
  }
}

function render() {
  lengthEl.innerHTML = lengthTxt
  volumeEl.innerHTML = volumeTxt
  massEl.innerHTML = massTxt
}

inputBtn.addEventListener("click", convert)

// dark theme
darkBtn.addEventListener("click", function() {
  body.classList.toggle("dark-theme")
  if (body.classList.contains("dark-theme")) {
    darkBtn.textContent = "Light 테마로 보기"
  } else {
    darkBtn.textContent = "Dark 테마로 보기"
  }
})