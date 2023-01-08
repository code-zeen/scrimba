import React from 'react'

export default function Die(props) {
  function getRandomDie() {
    return Math.floor(Math.random() * 6) + 1
  }

  const randomDie = getRandomDie()

  return (
    <div className="die">
      {randomDie}
    </div>
  )
}