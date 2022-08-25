let playerCards = []
let playerSum = 0
let dealerCards = []
let dealerSum = 0
let hasBlackJack = false
let isAlive = false
let choseStay = false
let message = ""

let playerCardsEl = document.getElementById("player-cards-el")
let playerSumEl = document.getElementById("player-sum-el")
let dealerCardsEl = document.getElementById("dealer-cards-el")
let dealerSumEl = document.getElementById("dealer-sum-el")

let messageEl = document.getElementById("message-el")
let playerEl = document.getElementById("player-el")

// player profile
let player = {
  name: "Codezeen",
  chips: 150
}

// interface
playerEl.textContent = player.name + ": $" + player.chips


// generate a random card
function getRandomCard() {
  let randomCard = Math.floor(Math.random() * 13) + 1
  if (randomCard === 1) {
    if (playerSum < 11) {
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

// start OR continue
function startGame() {
  isAlive = true
  hasBlackJack = false
  choseStay = false

  let playerFirstCard = getRandomCard()
  let playerSecondCard = getRandomCard()
  playerCards = [playerFirstCard, playerSecondCard]
  playerSum = playerFirstCard + playerSecondCard

  let dealerFirstCard = getRandomCard()
  dealerCards = [dealerFirstCard]
  dealerSum = dealerFirstCard

  dealerCardsEl.textContent = "Dealer: " + dealerFirstCard + " "
  renderGame()
}

// calculate the game
function renderGame() {
  if (player.chips > 0) {
    playerCardsEl.textContent = "Cards: "

    for (let i = 0; i < playerCards.length; i++) {
      playerCardsEl.textContent += playerCards[i] + " "
    }

    console.log("rendered")
    if (playerSum <= 21) {
      message = "Do you want to draw a new card?"
    } else {
      message = "Bust! You lost $10"
      player.chips -= 10
      isAlive = false
    }

    playerEl.textContent = player.name + ": $" + player.chips
    messageEl.textContent = message
    playerSumEl.textContent = "Total: " + playerSum

    dealerSumEl.textContent = "Total: " + dealerSum
  } else {
    messageEl.textContent = "Sorry, you're out of money"
  }
}

// draw a card (hit)
function newCard() {
  if (isAlive === true && hasBlackJack === false && choseStay === false) {
    let newCard = getRandomCard()
    playerCards.push(newCard)
    playerSum += newCard
    renderGame()
    console.log("Drawing new card...")
  } else {
    console.log("Please restart the game")
  }

}

function stay() {
  choseStay = true
  for (let i = 0; i < 10; i++) {
    if (dealerSum < 18) {
      let newCard = getRandomCard()
      dealerCards.push(newCard)
      dealerSum += newCard
      dealerCardsEl.textContent += dealerCards[i] + " "
      dealerSumEl.textContent = "Total: " + dealerSum
    }
  }
  if (dealerSum === 21) {
    if (playerSum === 21) {
      messageEl.textContent = "It's a tie!"
    } else {
      messageEl.textContent = "You lost $10"
      player.chips -= 10
      isAlive = false
    }
  } else if (dealerSum > 21) {
    messageEl.textContent = "The dealer busted! You won $10"
    player.chips += 10
    hasBlackJack = true
  } else if (dealerSum < 21) {
    if (playerSum > dealerSum) {
      messageEl.textContent = "You won $10!!"
      player.chips += 10
    } else if (playerSum < dealerSum) {
      messageEl.textContent = "You lost $10"
      player.chips -= 10
    } else if (playerSum === dealerSum) {
      messageEl.textContent = "It's a tie!"
    }
  }
  playerEl.textContent = player.name + ": $" + player.chips
}