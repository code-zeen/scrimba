import React from 'react'

export default function Title(props) {
  return (
      <div className="title-page">
        <h1 className="title">Quizzical</h1>
        <p className="subtitle">Test your trivia with this quiz!</p>
        <button className="quiz-start" onClick={() => props.handleClick()}>Start Quiz</button>
      </div>
  )
}