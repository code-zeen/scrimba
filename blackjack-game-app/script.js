let firstCard = 11
let secondCard = 10
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""



function startGame() {
  if (sum < 21) {
    message = "Do you want to draw a new card?"
  } else if (sum === 21) {
    message = "Wohoo! You won."
    hasBlackJack = true
  } else {
    message = "You lost all your money"
    isAlive = false
  }
}

console.log(message)