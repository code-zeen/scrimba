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
  chips: 150
}

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
  let randomCard = Math.floor(Math.random() * 13) + 1

  if (randomCard === 1) {
    if (sum < 11) {
      return 11
    } else {
      return 1
    }
  } else if (randomCard > 10) {
    return 10
  } else {
    return randomCard
  }
}

function startGame() {
  isAlive = true
  hasBlackJack = false
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard
  renderGame()
}

function renderGame() {
  if (player.chips > 0) {
    cardsEl.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++) {
      cardsEl.textContent += cards[i] + " "
    }

    console.log("rendered")
    if (sum < 21) {
      message = "Do you want to draw a new card?"
    } else if (sum === 21) {
      message = "Wohoo! You won."
      player.chips += 10
      hasBlackJack = true
    } else {
      message = "Bust! You lost $10"
      player.chips -= 10
      isAlive = false
    }

    playerEl.textContent = player.name + ": $" + player.chips
    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
  } else {
      messageEl.textContent = "Sorry, you're out of money"
  }
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