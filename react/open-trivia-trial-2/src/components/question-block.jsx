import React from "react"
import Answer from "./answer"

export default function QuestionBlock({ question, correctAnswer, incorrectAnswers, selectedAnswer, handleChange }) {

  const [randomizedAnswers, setRandomizedAnswers] = React.useState(randomizeAnswers())

  // dangerously setting innter html
  function createMarkup(prop) {
    return {__html: prop};
  }

  function randNum() {
    return Math.floor(Math.random() * 4)
  }

  function randomizeAnswers() {
    const answersArray = [...incorrectAnswers]

    if (answersArray.length === 3) {
      answersArray.splice(randNum(), 0, correctAnswer)
    } else if (correctAnswer === "True") {
      answersArray.splice(0, 0, correctAnswer)
    } else if (correctAnswer === "False") {
      answersArray.push(correctAnswer)
    }
    return answersArray
  }

  const answerElements = randomizedAnswers.map((answer, index) => {
    return (
      <Answer
        key={index}
        questionIndex={question}
        index={index}
        correctAnswer={correctAnswer}
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
    <p>{selectedAnswer === correctAnswer ? <i className="fa-solid fa-circle-check"></i> : <i className="fa-solid fa-circle-xmark"></i>}</p>
      <hr/>
    </div>
  )
}