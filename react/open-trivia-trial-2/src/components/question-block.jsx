import React from "react"
import Answer from "./answer"

export default function QuestionBlock({ id, question, correctAnswer, incorrectAnswers }) {

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
    } else if (correctAnswer.string === "True") {
      answersArray.splice(0, 0, correctAnswer)
    } else if (correctAnswer.string === "False") {
      answersArray.push(correctAnswer)
    }
    return answersArray
  }

  console.log(randomizeAnswers())

  const answerElements = randomizeAnswers().map((answer, index) => {
    return (
      <Answer
        key={index}
        questionIndex={id}
        index={index}
        anyAnswer={answer.string}
        isChecked={answer.isChecked}
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