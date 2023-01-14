import React from "react"
import Answer from "./answer"

export default function QuestionBlock({ id, question, correctAnswer, incorrectAnswers, selectedAnswer, handleChange }) {

  // dangerously setting innter html
  function createMarkup(prop) {
    return {__html: prop};
  }

  function randNum() {
    return Math.floor(Math.random() * 4)
  }

  function randomizeAnswers() {
    const answersArray = incorrectAnswers

    if (answersArray.length === 3) {
      answersArray.splice(randNum(), 0, correctAnswer)
    } else if (correctAnswer === "True") {
      answersArray.splice(0, 0, correctAnswer)
    } else if (correctAnswer === "False") {
      answersArray.push(correctAnswer)
    }
    return answersArray
  }



  const answerElements = randomizeAnswers().map((answer, index) => {
    return (
      <Answer
        key={index}
        questionIndex={question}
        index={index}
        anyAnswer={answer}
        selectedAnswer={selectedAnswer}
        handleChange={handleChange}
      />
    )
  })

  return (
    <div className="question-block">
      <h3 dangerouslySetInnerHTML={createMarkup(question)}></h3>
    <div className="answers">
      {answerElements}
    </div>
      <hr/>
    </div>
  )
}