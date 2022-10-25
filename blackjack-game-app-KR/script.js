let playerCards = []
let playerSuits = []
let playerSum = 0
let dealerCards = []
let dealerSuits = []
let dealerSum = 0

let fullSuit = ["\u2663\ufe0f", "\u2666\uFE0F", "\u2665\uFE0F", "\u2660\ufe0f"]
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
let startBtn = document.getElementById("start-btn")
let hitBtn = document.getElementById("hit-btn")
let stayBtn = document.getElementById("stay-btn")

// interface (text) automation
function displayPlayerSum() {
  playerSumEl.textContent = "합: " + playerSum
}

function displayPlayerChips() {
  playerEl.textContent = player.name + ": $ " + player.chips
}

function displayDealerSum() {
  dealerSumEl.textContent = "합: " + dealerSum
}

function winChips() {
  player.chips += 10
}

function loseChips() {
  player.chips -= 10
}

function resetButtons() {
  startBtn.classList.remove("disabled")
  hitBtn.classList.add("disabled")
  stayBtn.classList.add("disabled")
}
// player profile
let player = {
  name: "",
  chips: 100
}

// interface
player.name = prompt("닉네임을 입력하세요: ", "홍길동")
if (player.name === null) {
  player.name = "홍길동"
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
// generate a random card suit emoji
function getRandomSuit() {
  let randomNumber = Math.floor(Math.random() * 4)
  return fullSuit[randomNumber]
}

// start / continue
function startGame() {
  // cannot start/restart game if alive
  if (isAlive === false) {
    // reset status
    isAlive = true
    hasBlackJack = false
    choseStay = false
    playerCardsEl.textContent = "플레이어: "
    // button able/disable
    startBtn.classList.add("disabled")
    hitBtn.classList.remove("disabled")
    stayBtn.classList.remove("disabled")


    // must have money to play
    if (player.chips > 0) {
      // initialize player
      let playerFirstCard = getRandomCard()
      let playerSecondCard = getRandomCard()
      playerCards = [playerFirstCard, playerSecondCard]
      playerSum = playerFirstCard + playerSecondCard

      let playerFirstSuit = getRandomSuit()
      let playerSecondSuit = getRandomSuit()
      playerSuits = [playerFirstSuit, playerSecondSuit]
      // initialize dealer
      let dealerFirstCard = getRandomCard()
      dealerCards = [dealerFirstCard]
      dealerSum = dealerFirstCard

      let dealerFirstSuit = getRandomSuit()
      dealerSuits = [dealerFirstSuit]

      dealerCardsEl.textContent = "딜러: " + dealerFirstCard + dealerFirstSuit + " "

      // initial blackjack
      if (playerSum === 21) {
        playerCardsEl.textContent += playerFirstCard + playerFirstSuit + " " + playerSecondCard + playerSecondSuit
        messageEl.textContent = "블랙잭!! (+$10)"
        displayPlayerSum()
        winChips()
        displayPlayerChips()
        resetButtons()
        hasblackJack = true
        // continue actual game
      } else {
        renderGame()
      }
      // no money
    } else {
      messageEl.textContent = "아이고, 돈이 다 떨어지셨네요?"
    }
  } else {
    console.log("진행중인 게임을 완료하세요.")
  }
}

// actual game
function renderGame() {
  playerCardsEl.textContent = "플레이어: "
  for (let i = 0; i < playerCards.length; i++) {
    playerCardsEl.textContent += playerCards[i] + playerSuits[i] + " "
  }

  console.log("rendered")
  if (playerSum <= 21) {
    message = "카드를 뽑으시겠습니까?"
  } else {
    message = "버스트! (-$10)"
    loseChips()
    resetButtons()
    isAlive = false
  }

  messageEl.textContent = message
  displayPlayerChips()
  displayPlayerSum()
  displayDealerSum()
}


// draw a card (hit)
function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let newCard = getRandomCard()
    playerCards.push(newCard)
    playerSum += newCard
    let newSuit = getRandomSuit()
    playerSuits.push(newSuit)
    renderGame()
    console.log("카드 뽑는 중...")
  } else if (hasBlackJack === true && choseStay === false) {
    console.log("'시작하기' 버튼을 눌러주십시오.")
  }

}

function stay() {
  if (isAlive === true && hasBlackJack === false) {
    choseStay = true
    isAlive = false
    console.log("스테이를 선택함")
    for (let i = 0; i < 10; i++) {
      if (dealerSum < 18) {
        let newCard = getRandomCard()
        dealerCards.push(newCard)
        dealerSum += newCard
        let newSuit = getRandomSuit()
        dealerSuits.push(newSuit)

        dealerCardsEl.textContent += dealerCards[i] + dealerSuits[i] + " "
        displayDealerSum()
      }
    }
    if (dealerSum === 21) {
      if (playerSum === 21) {
        messageEl.textContent = "무승부입니다."
      } else {
        messageEl.textContent = "버스트! (-$10)"
        loseChips()
        isAlive = false
      }
      displayPlayerChips()
      resetButtons()
    } else if (dealerSum > 21) {
      messageEl.textContent = "딜러가 버스트 났습니다! (+$10)"
      winChips()
      displayPlayerChips()
      resetButtons()
      hasBlackJack = true
    } else if (dealerSum < 21) {
      if (playerSum > dealerSum) {
        messageEl.textContent = "축하합니다! (+$10)"
        winChips()
      } else if (playerSum < dealerSum) {
        messageEl.textContent = "아쉽습니다... (-$10)"
        loseChips()
      } else if (playerSum === dealerSum) {
        messageEl.textContent = "동점으로 무승부입니다."
      }
      displayPlayerChips()
      resetButtons()
    }
    displayDealerSum()
    displayPlayerChips()
  } else {
    console.log("게임을 재시작 하여주십시오.")
    resetButtons()
  }
}