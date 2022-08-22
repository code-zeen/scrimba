// Scoreboard number
let homeScore = document.getElementById("home-scr")
let guestScore = document.getElementById("guest-scr")

// Initialize scores
let scoreH = 0
let scoreG = 0

// Home
function addOneHome() {
  scoreH += 1
  homeScore.textContent = scoreH
}
function addTwoHome() {
  scoreH += 2
  homeScore.textContent = scoreH
}
function addThreeHome() {
  scoreH += 3
  homeScore.textContent = scoreH
}
// Guest
function addOneGuest() {
  scoreG += 1
  guestScore.textContent = scoreG
}
function addTwoGuest() {
  scoreG += 2
  guestScore.textContent = scoreG
}
function addThreeGuest() {
  scoreG += 3
  guestScore.textContent = scoreG
}