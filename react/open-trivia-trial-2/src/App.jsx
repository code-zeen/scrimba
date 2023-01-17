import React from "react"
import BtnCheck from "./components/btn-check"
import QuestionBlock from "./components/question-block"
import Title from "./components/title"

export default function App() {
  const [titleOn, setTitleOn] = React.useState(true)
  const [triviaData, setTriviaData] = React.useState([])
  const [isChecked, setIsChecked] = React.useState(false)
  const [score, setScore] = React.useState(0)

  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5")
      .then(res => res.json())
      .then(data => data.results.map(datum => ({
        ...datum,
        selectedAnswer: ""
      })))
      .then(formattedData => setTriviaData(formattedData))
  }, [])


  function startQuiz() {
    setTitleOn(prev => !prev)
  }

  function handleChange(event) {
    const {name, value} = event.target
    setTriviaData(prev => prev.map(prev => {
      if (prev.question === name) {
        return {
          ...prev,
          selectedAnswer: value
        } 
      } else {
        return {
          ...prev
        }
      }
    })
    )
  }

  function checkAnswers() {
    setIsChecked(prev => !prev)
    console.log(isChecked)
    triviaData.map(datum => {
      datum.selectedAnswer === datum.correct_answer ? 
        setScore(prev => prev + 1) : ""
    })
  }
  console.log(score)

  const questionElements = triviaData.map((datum, index) => {

    return (
      <QuestionBlock
        key={index}
        question={datum.question}
        correctAnswer={datum.correct_answer}
        incorrectAnswers={datum.incorrect_answers}
        selectedAnswer={datum.selectedAnswer}
        handleChange={handleChange}
        isChecked={isChecked}
      />
    )
  })

  return (
    <main>
      {titleOn && <Title handleClick={startQuiz}/>}
      {!titleOn && <h1 className="title">Quizzical</h1>}
      {!titleOn && questionElements}
      {!titleOn && <div className="check-button">
        {isChecked && <h3>You scored {score}/5 correct answers</h3>}
        <BtnCheck handleClick={checkAnswers} isChecked={isChecked}/>
      </div>}
    </main>
  )
}