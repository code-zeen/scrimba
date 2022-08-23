let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame() {
  renderGame()
}

function renderGame() {
  cardsEl.textContent = "Cards: "

  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " "
  }
  
  console.log("rendered")
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
  sumEl.textContent = "Sum: " + sum
}

function getRandomCard() {
  let randomCard = Math.floor(Math.random()*13) + 1

  if (randomCard === 1) {
    return 11
  } else if (randomCard === (11 || 12 || 13)) {
    return 10
  } else {
    return randomCard
  }
}

function newCard() {
  console.log("drawing new card")
  let newCard = getRandomCard()
  cards.push(newCard)
  sum += newCard
  renderGame()
} 
