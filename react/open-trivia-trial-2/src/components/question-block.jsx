import React from "react"
import Answer from "./answer"

export default function QuestionBlock({ id, question, correctAnswer, incorrectAnswers }) {
  const answerElements = incorrectAnswers.map((answer, index) => {
    return (
      <Answer
        key={index}
        qIndex={id}
        index={index}
        value={answer}
      />
    )
  })

  console.log(incorrectAnswers)
  return (
    <div className="question-block">
      <h3>{question}</h3>
    <div className="answers">
      {answerElements}
    </div>
      <hr/>
    </div>
  )
}