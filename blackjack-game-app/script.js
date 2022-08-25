let playerCards = []
let playerSum = 0
let dealerCards = []
let dealerSum = 0
let hasBlackJack = false
let isAlive = false
let choseStay = false
let message = ""

// DOM elements
let playerCardsEl = document.getElementById("player-cards-el")
let playerSumEl = document.getElementById("player-sum-el")
let dealerCardsEl = document.getElementById("dealer-cards-el")
let dealerSumEl = document.getElementById("dealer-sum-el")
let messageEl = document.getElementById("message-el")
let playerEl = document.getElementById("player-el")

// interface (text) automation
function displayPlayerSum() {
  playerSumEl.textContent = "Total: " + playerSum
}

function displayPlayerChips() {
  playerEl.textContent = player.name + ": $ " + player.chips
}

function displayDealerSum() {
  dealerSumEl.textContent = "Total: " + dealerSum
}

function winChips() {
  player.chips += 10
}

function loseChips() {
  player.chips -= 10
}

// player profile
let player = {
  name: "John Doe",
  chips: 150
}

// interface
player.name = prompt("Please enter your name: ", "John")
if (player.name === null) {
  player.name = "WeirdChamp"
}
displayPlayerChips()


// generate a random card
function getRandomCard() {
  let randomCard = Math.floor(Math.random() * 13) + 1
  if (randomCard === 1) {
    if (playerSum < 11 || dealerSum < 11) {
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

// start / continue
function startGame() {
  // cannot start/restart game if alive
  if (isAlive === false) {
    // reset status
    isAlive = true
    hasBlackJack = false
    choseStay = false
    playerCardsEl.textContent = "Player: "

    // must have money to play
    if (player.chips > 0) {
      // initialize player
      let playerFirstCard = getRandomCard()
      let playerSecondCard = getRandomCard()
      playerCards = [playerFirstCard, playerSecondCard]
      playerSum = playerFirstCard + playerSecondCard
      // initialize dealer
      let dealerFirstCard = getRandomCard()
      dealerCards = [dealerFirstCard]
      dealerSum = dealerFirstCard
      dealerCardsEl.textContent = "Dealer: " + dealerFirstCard + " "

      // initial blackjack
      if (playerSum === 21) {
        playerCardsEl.textContent += playerFirstCard + " " + playerSecondCard
        messageEl.textContent = "BLACKJACK!!"
        displayPlayerSum()
        winChips()
        displayPlayerChips()
        hasblackJack = true
        // continue actual game
      } else {
        renderGame()
      }
      // no money
    } else {
      messageEl.textContent = "Sorry, you're out of money"
    }
  } else {
    console.log("Please finish the current game")
  }
}

// actual game
function renderGame() {
  playerCardsEl.textContent = "Player: "
  for (let i = 0; i < playerCards.length; i++) {
    playerCardsEl.textContent += playerCards[i] + " "
  }

  console.log("rendered")
  if (playerSum <= 21) {
    message = "Do you want to draw a new card?"
  } else {
    message = "Bust! You lost $ 10"
    loseChips()
    isAlive = false
  }

  messageEl.textContent = message
  displayPlayerChips()
  displayPlayerSum()
  displayDealerSum()
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
  if (isAlive === true && hasBlackJack === false) {
    choseStay = true
    isAlive = false
    console.log("You chose to stay")
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
        messageEl.textContent = "It's a tie! You win nothing"
      } else {
        messageEl.textContent = "You lost $ 10"
        player.chips -= 10
        isAlive = false
      }
    } else if (dealerSum > 21) {
      messageEl.textContent = "The dealer busted! You won $ 10"
      player.chips += 10
      hasBlackJack = true
    } else if (dealerSum < 21) {
      if (playerSum > dealerSum) {
        messageEl.textContent = "You won $ 10!!"
        player.chips += 10
      } else if (playerSum < dealerSum) {
        messageEl.textContent = "You lost $ 10"
        player.chips -= 10
      } else if (playerSum === dealerSum) {
        messageEl.textContent = "It's a tie!"
      }
    }
    displayPlayerChips
  } else {
    console.log("Please restart the game")
  }
}