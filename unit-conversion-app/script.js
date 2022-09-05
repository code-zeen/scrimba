const input = document.getElementById("input-el")
const errorEl = document.getElementById("error-el")
const inputBtn = document.getElementById("input-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

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
    ${input.value} m = ${mToFt(input.value)} ft | ${input.value} ft = ${ftToM(input.value)} m
  `
  volumeTxt = `
    ${input.value} L = ${lToGal(input.value)} gal | ${input.value} gal = ${galToL(input.value)} L
  `
  massTxt = `
    ${input.value} kg = ${kgToLbs(input.value)} lbs | ${input.value} lbs = ${lbsToKg(input.value)} kg
  `

  if (isNaN(input.value) || input.value === undefined) {
    errorEl.textContent = "Please input a valid number"
  } else if (input.value === "") {
    errorEl.textContent = "Input is empty"
  } else {
    errorEl.innerHTML = "&nbsp;"
    render()
  }
}

function render() {
  lengthEl.textContent = lengthTxt
  volumeEl.textContent = volumeTxt
  massEl.textContent = massTxt
}

inputBtn.addEventListener("click", convert)