import React from 'react'
import Die from './components/Die'
import Confetti from 'react-confetti'

export default function App() {

  const [dice, setDice] = React.useState(allNewDice())
  const [tenzies, setTenzies] = React.useState(false)

  React.useEffect(() => {
    const isAllHeld = dice.every(die => die.isHeld)
    const firstValue = dice[0].value
    const allSameValue = dice.every(die => die.value === firstValue)

    isAllHeld && allSameValue ? setTenzies(true) : setTenzies(false)
  }, [dice])

  const diceElements = dice.map(die => (
    <Die key={die.id} id={die.id} value={die.value} isHeld={die.isHeld} handleClick={holdDice}/>
  ))

  function getRandomDie() {
    return Math.floor(Math.random() * 6) + 1
  }

  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push({
        id: i + 1,
        value: getRandomDie(),
        isHeld: false
      })
    }
    return newDice
  }

  function holdDice(id) {
    setDice(prevState => prevState.map(prevDie => {
      if (prevDie.id === id) {
        return {...prevDie, isHeld: !prevDie.isHeld}
      } else {
        return prevDie
      }
    }))
  }

  function rerollDice() {
    setDice(prevState => prevState.map(prevDie => {
      if (prevDie.isHeld === false) {
        return {...prevDie, value: getRandomDie()}
      } else {
        return prevDie
      }
    }))
  }

  return (
    <main>
      {tenzies && <Confetti/>}
      <h1 className="title">Tenzies</h1>
      <p className="how-to-play">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="dice">
        {diceElements}
      </div>
      <button onClick={rerollDice}>{tenzies ? "New Game" : "Roll"}</button>
    </main>
  )
}