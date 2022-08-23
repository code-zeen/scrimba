let firstCard = 11
let secondCard = 6
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame() {
  console.log("started")
  if (sum < 21) {
    message = "Do you want to draw a new card?"
  } else if (sum === 21) {
    message = "Wohoo! You won."
    hasBlackJack = true
  } else {
    message = "You lost all your money"
    isAlive = false
  }
  messageEl.textContent = message
  cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
  sumEl.textContent = "Sum: " + sum
}

function newCard() {
  console.log("drawing new card")
  let newCard = 4
  sum += newCard
  startGame()
}