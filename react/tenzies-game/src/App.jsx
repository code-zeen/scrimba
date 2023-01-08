import React from 'react'
import Die from './components/Die'

export default function App() {
  return (
    <main>
      <h1 className="title">Tenzies</h1>
      <p className="how-to-play">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="dice">
        <Die/>
        <Die/>
        <Die/>
        <Die/>
        <Die/>
        <Die/>
        <Die/>
        <Die/>
        <Die/>
        <Die/>
      </div>
      <button>Roll</button>
    </main>
  )
}