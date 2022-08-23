let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

let player = {
  name: "Codezeen",
  chips: 145
}

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
  let randomCard = Math.floor(Math.random()*13) + 1

  if (randomCard === 1) {
    return 11
  } else if (randomCard > 10) {
    return 10
  } else {
    return randomCard
  }
}

function startGame() {
  isAlive = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard
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

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    console.log("Drawing new card...")
    let newCard = getRandomCard()
    cards.push(newCard)
    sum += newCard
    renderGame()
  } else {
    console.log("Please restart the game")
  }
  
} 

